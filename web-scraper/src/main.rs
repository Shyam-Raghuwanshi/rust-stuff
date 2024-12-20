// use rayon::iter::{IntoParallelRefIterator, ParallelIterator};
// use reqwest::blocking::Client;
// use scraper::{Html, Selector};
// use std::collections::HashSet;
// use std::sync::{Arc, Mutex};
// use std::time::Instant;
// use url::Url;

// fn main() -> Result<(), Box<dyn std::error::Error>> {
//     let start_url = "https://supabase.com/";
//     let start_time = Instant::now();

//     let base_url = Url::parse(start_url)?;
//     let client = Client::new();
//     let visited_links = Arc::new(Mutex::new(HashSet::new()));
//     let all_links = Arc::new(Mutex::new(Vec::new()));
//     crawl_website(start_url, &base_url, &client, &visited_links, &all_links);

//     let elapsed_time = start_time.elapsed();
//     println!("Crawling completed in {:?}", elapsed_time);
//     println!(
//         "Total unique links found: {}",
//         all_links.lock().unwrap().len()
//     );

//     Ok(())
// }

// fn crawl_website(
//     url: &str,
//     base_url: &Url,
//     client: &Client,
//     visited_links: &Arc<Mutex<HashSet<String>>>,
//     all_links: &Arc<Mutex<Vec<String>>>,
// ) {
//     if visited_links.lock().unwrap().contains(url) {
//         return;
//     }

//     println!("Crawling: {}", url);
//     visited_links.lock().unwrap().insert(url.to_string());

//     let response = match client.get(url).send() {
//         Ok(resp) => resp,
//         Err(_) => return,
//     };

//     if !response.status().is_success() {
//         return;
//     }

//     let html = response.text().unwrap_or_default();
//     let document = Html::parse_document(&html);
//     let selector = Selector::parse("a").unwrap();

//     let new_links: Vec<String> = document
//         .select(&selector)
//         .filter_map(|element| element.value().attr("href"))
//         .filter_map(|href| base_url.join(href).ok())
//         .map(|url| url.to_string())
//         .filter(|url| url.starts_with(base_url.as_str()))
//         .filter(|url| {
//             !url.contains('#')
//                 && !url.contains("github.com")
//                 && !url.contains("discord.com")
//                 && !url.contains("twitter.com")
//                 && !url.contains("x.com")
//                 && !url.contains("facebook.com")
//                 && !url.contains("instagram.com")
//                 && !url.contains("web.whatsapp.com")
//                 && !url.contains("whatsapp.com")
//                 && !url.contains("youtube.com")
//                 && !url.contains("telegram.com")
//                 && !url.contains("?")
//                 && !url.contains("%")
//                 && !url.contains("_")
//                 && !url.contains("/undefined")
//                 && !url.ends_with(".txt")
//                 && !url.ends_with(".zip")
//                 && !url.ends_with(".pdf")
//         })
//         .collect();
//     new_links.par_iter().for_each(|link| {
//         if !visited_links.lock().unwrap().contains(link) {
//             all_links.lock().unwrap().push(link.clone());
//             crawl_website(link, base_url, client, visited_links, all_links);
//         }
//     });
// }

use playwright::Playwright;
use serde_json::Value;
#[tokio::main]
async fn main() -> Result<(), playwright::Error> {
    let playwright = Playwright::initialize().await?;
    playwright.prepare()?; // Install browsers
    let chromium = playwright.chromium();
    let browser = chromium.launcher().headless(true).launch().await?;
    let context = browser.context_builder().build().await?;
    let page = context.new_page().await?;
    page.goto_builder("https://hono.dev/").goto().await?;

    let clean_content_script = r#"
        let header = document.querySelector('header');
        if (header) header.remove();

        let footer = document.querySelector('footer');
        if (footer) footer.remove();

        let headersToRemove = document.querySelectorAll('.header, .site-header, #header, .footer, .site-footer, #footer');
        headersToRemove.forEach(el => el.remove());
        document.body.innerText;
    "#;

    let content = page
        .evaluate::<Value, String>(clean_content_script, serde_json::json!({}))
        .await?
        .as_str()
        .to_string();

    println!("{:?}", content);

    Ok(())
}
