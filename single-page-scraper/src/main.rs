use reqwest::Client;
use scraper::{Html, Selector};
use std::collections::HashSet;

async fn scrape_text_from_url(url: &str) -> Result<String, Box<dyn std::error::Error>> {
    let client = Client::new();
    let response = client.get(url).send().await?;

    if !response.status().is_success() {
        return Ok(String::new());
    }

    let html = response.text().await?;
    let document = Html::parse_document(&html);

    // Define selectors for elements we want to exclude
    let exclude_selectors =
        Selector::parse("script, style, noscript, iframe, head, footer").unwrap();

    // Define selector for elements we want to include (adjust as needed)
    let include_selector =
        Selector::parse("body p, body h1, body h2, body h3, body h4, body h5, body h6, body li")
            .unwrap();

    let mut unique_texts = HashSet::new();

    for element in document.select(&include_selector) {
        // Check if the element or any of its parents match the exclude selectors
        if !element.ancestors().any(|ancestor| {
            ancestor.value().is_element()
                && document
                    .select(&exclude_selectors)
                    .any(|excluded| excluded.id() == ancestor.id())
        }) {
            let element_text = element.text().collect::<String>();
            let cleaned_text = clean_text(&element_text);
            if !cleaned_text.is_empty() {
                unique_texts.insert(cleaned_text);
            }
        }
    }

    Ok(unique_texts.into_iter().collect::<Vec<_>>().join(" "))
}

fn clean_text(text: &str) -> String {
    text.split_whitespace()
        .collect::<Vec<_>>()
        .join(" ")
        .trim()
        .to_string()
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "https://vercel.com/solutions/composable-commerce"; // Replace with your target URL
    let scraped_text = scrape_text_from_url(url).await?;
    println!("Scraped text: {}", scraped_text);
    Ok(())
}
