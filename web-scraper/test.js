const arr = ["https://hono.dev/#payload-validation",
    "https://hono.dev/docs/middleware/builtin/logger",
    "https://hono.dev/#developer-experience",
    "https://hono.dev/#errorboundary",
    "https://hono.dev/#manual",
    "https://hono.dev/#callback",
    "https://hono.dev/#known-issues",
    "https://hono.dev/#supabase-edge-functions",
    "https://hono.dev/docs/helpers/adapter",
    "https://hono.dev/#factory-createhandlers-in-hono-factory",
    "https://hono.dev/#routing",
    "https://hono.dev/#basic",
    "https://hono.dev/#how-to-protect-the-api-for-stripe-webhook-events",
    "https://hono.dev/#service-worker-mode-or-module-worker-mode",
    "https://hono.dev/#secret-string",
    "https://hono.dev/#use-bindings-in-your-application",
    "https://hono.dev/docs/middleware/builtin/request-id",
    "https://hono.dev/#header-boolean",
    "https://hono.dev/#limitlength-number",
    "https://hono.dev/docs/getting-started/cloudflare-workers",
    "https://hono.dev/#third-party-middleware",
    "https://hono.dev/#proxy",
    "https://hono.dev/#return-html",
    "https://hono.dev/#notes",
    "https://hono.dev/#grouping-ordering",
    "https://hono.dev/#_3-deploy",
    "https://hono.dev/#upgradewebsocket",
    "https://hono.dev/#serve-binary-data",
    "https://hono.dev/#form-string",
    "https://hono.dev/#formdata",
    "https://hono.dev/docs/api/presets",
    "https://hono.dev/#getruntimekey",
    "https://hono.dev/#specify-the-runtime",
    "https://hono.dev/examples/cloudflare-durable-objects",
    "https://hono.dev/#starter",
    "https://hono.dev/#setup-new-pylon-service",
    "https://hono.dev/docs/middleware/builtin/cache",
    "https://hono.dev/#using-hono-with-other-event-handlers",
    "https://hono.dev/#error",
    "https://hono.dev/#who-is-using-hono",
    "https://hono.dev/docs/helpers/jwt",
    "https://hono.dev/#benchmarks",
    "https://hono.dev/examples/htmx",
    "https://hono.dev/#res",
    "https://hono.dev/docs/api/hono",
    "https://hono.dev/#smartrouter",
    "https://hono.dev/#_1-an-easiest-example",
    "https://hono.dev/docs/concepts/middleware",
    "https://hono.dev/docs/helpers/factory",
    "https://hono.dev/#available-runtimes-keys",
    "https://hono.dev/#ipv6",
    "https://hono.dev/docs/helpers/cookie",
    "https://hono.dev/#multiple-routers",
    "https://hono.dev/#vercel",
    "https://hono.dev/#fire",
    "https://hono.dev/#crossorigin-boolean-string-c-context-boolean-string",
    "https://hono.dev/#createfactory",
    "https://hono.dev/#css",
    "https://hono.dev/#best-practices",
    "https://hono.dev/#param",
    "https://hono.dev/#arraybuffer",
    "https://hono.dev/#doctype-boolean-string",
    "https://hono.dev/docs/guides/testing",
    "https://hono.dev/#note",
    "https://hono.dev/#usage",
    "https://hono.dev/#cloudflare-pages",
    "https://hono.dev/docs/middleware/builtin/pretty-json",
    "https://hono.dev/#_1-setup",
    "https://hono.dev/#raw",
    "https://hono.dev/#trierouter",
    "https://hono.dev/#ssgparams",
    "https://hono.dev/#with-jsx-renderer-middleware",
    "https://hono.dev/docs/guides/best-practices",
    "https://hono.dev/#middleware-helpers",
    "https://hono.dev/#import",
    "https://hono.dev/#method-override-middleware",
    "https://hono.dev/#error-handling-in-validator",
    "https://hono.dev/#quick-start",
    "https://hono.dev/#request-id-middleware",
    "https://hono.dev/#userequestcontext",
    "https://hono.dev/#custom-middleware",
    "https://hono.dev/#regexp",
    "https://hono.dev/#modify-the-response-after-next",
    "https://hono.dev/#jsx-renderer-middleware",
    "https://hono.dev/#every",
    "https://hono.dev/#extending-the-context-in-middleware",
    "https://hono.dev/#access-the-raw-node-js-apis",
    "https://hono.dev/#token-string-string",
    "https://hono.dev/#printfunc",
    "https://hono.dev/#swagger-ui",
    "https://hono.dev/#dot-notation",
    "https://hono.dev/docs/getting-started/netlify",
    "https://hono.dev/#alg-algorithmtypes-1",
    "https://hono.dev/#usage-with-bun-for-large-requests",
    "https://hono.dev/#setcookie-setsignedcookie",
    "https://hono.dev/#options-1",
    "https://hono.dev/docs/guides/faq",
    "https://hono.dev/#_3-using-useviewtransition",
    "https://hono.dev/#base-path",
    "https://hono.dev/#others",
    "https://hono.dev/#_2-1-setup-a-new-project",
    "https://hono.dev/#tips",
    "https://hono.dev/#set-get",
    "https://hono.dev/docs/api/exception",
    "https://hono.dev/docs/",
    "https://hono.dev/#hono-in-1-minute",
    "https://hono.dev/#html",
    "https://hono.dev/#unencrypted-http2",
    "https://hono.dev/#extending-contextrenderer",
    "https://hono.dev/#rewriterequestpath",
    "https://hono.dev/#return-raw-response",
    "https://hono.dev/#disablessg",
    "https://hono.dev/#create-a-more-complex-api",
    "https://hono.dev/#hooks-compatible-with-react",
    "https://hono.dev/#css-helper",
    "https://hono.dev/#rpc",
    "https://hono.dev/#matchedroutes",
    "https://hono.dev/docs/helpers/conninfo",
    "https://hono.dev/#preparation",
    "https://hono.dev/docs/getting-started/service-worker",
    "https://hono.dev/#server-and-client",
    "https://hono.dev/#hello-world",
    "https://hono.dev/#generator-c-context-string",
    "https://hono.dev/#features",
    "https://hono.dev/#optional-parameter",
    "https://hono.dev/#load-env-when-local-development",
    "https://hono.dev/#handling-httpexception",
    "https://hono.dev/#create-wrangler-toml",
    "https://hono.dev/#ide-performance",
    "https://hono.dev/#prefix-string",
    "https://hono.dev/#cause",
    "https://hono.dev/#stripe-webhook",
    "https://hono.dev/#streaming-helper",
    "https://hono.dev/#rpc-mode",
    "https://hono.dev/#types",
    "https://hono.dev/#maxage-number",
    "https://hono.dev/#combine-middleware",
    "https://hono.dev/#error-handling",
    "https://hono.dev/#example",
    "https://hono.dev/#beforerequesthook-afterresponsehook",
    "https://hono.dev/#patternrouter",
    "https://hono.dev/#username-string",
    "https://hono.dev/#settings",
    "https://hono.dev/#honorequest",
    "https://hono.dev/#writing-api",
    "https://hono.dev/#some",
    "https://hono.dev/#multiple-files",
    "https://hono.dev/#compile-your-code-before-using-it-recommended",
    "https://hono.dev/#hono-stacks",
    "https://hono.dev/#testing",
    "https://hono.dev/#result",
    "https://hono.dev/#nonce-attribute",
    "https://hono.dev/examples/swagger-ui",
    "https://hono.dev/#compress-middleware",
    "https://hono.dev/#conditionally-enabled",
    "https://hono.dev/#adapter-helper",
    "https://hono.dev/#web-standards",
    "https://hono.dev/docs/middleware/builtin/compress",
    "https://hono.dev/#helpers",
    "https://hono.dev/#other-resources",
    "https://hono.dev/docs/api/request#parsebody",
    "https://hono.dev/#see-also",
    "https://hono.dev/#options",
    "https://hono.dev/#query-boolean",
    "https://hono.dev/#env",
    "https://hono.dev/#url",
    "https://hono.dev/#using-rpc-with-larger-applications",
    "https://hono.dev/#json",
    "https://hono.dev/#manual-validator",
    "https://hono.dev/#sharing-the-types",
    "https://hono.dev/#path",
    "https://hono.dev/#fetch",
    "https://hono.dev/#contextvariablemap",
    "https://hono.dev/#factory-helper",
    "https://hono.dev/#hono",
    "https://hono.dev/#cloudflare-queues",
    "https://hono.dev/#act-as-functional-component",
    "https://hono.dev/#noauthenticationheadermessage-string-object-messagefunction",
    "https://hono.dev/examples/validator-error-handling",
    "https://hono.dev/#create-kv",
    "https://hono.dev/docs/guides/validation",
    "https://hono.dev/#custom-error-types",
    "https://hono.dev/#multiple-validators",
    "https://hono.dev/#acceptheader-type",
    "https://hono.dev/#allowmethods-string",
    "https://hono.dev/#grouping",
    "https://hono.dev/#mimes",
    "https://hono.dev/docs/concepts/web-standard",
    "https://hono.dev/docs/middleware/third-party",
    "https://hono.dev/#definition-of-middleware",
    "https://hono.dev/#chained-route",
    "https://hono.dev/#supported-options",
    "https://hono.dev/#execution-order",
    "https://hono.dev/#total-boolean",
    "https://hono.dev/#bun-with-jsx",
    "https://hono.dev/#render",
    "https://hono.dev/#stream-boolean-record-string-string",
    "https://hono.dev/#access-requestcontext",
    "https://hono.dev/#example-2",
    "https://hono.dev/docs/guides/jsx",
    "https://hono.dev/#headername-string",
    "https://hono.dev/docs/helpers/css",
    "https://hono.dev/#showroutes",
    "https://hono.dev/#verifytoken-token-string-c-context-boolean-promise-boolean",
    "https://hono.dev/#valid",
    "https://hono.dev/docs/getting-started/cloudflare-pages",
    "https://hono.dev/#rules",
    "https://hono.dev/#built-in-middleware",
    "https://hono.dev/#middleware-conflicts",
    "https://hono.dev/#origin-string-string-function",
    "https://hono.dev/#npm-specifier",
    "https://hono.dev/#hashfunction-function",
    "https://hono.dev/#onfound",
    "https://hono.dev/docs/helpers/dev",
    "https://hono.dev/#_5-deploy",
    "https://hono.dev/#zod-openapi",
    "https://hono.dev/docs/middleware/builtin/timeout",
    "https://hono.dev/docs/concepts/developer-experience",
    "https://hono.dev/#receives-props-and-embeds-values",
    "https://hono.dev/#websocket-helper",
    "https://hono.dev/#server-timing-middleware",
    "https://hono.dev/#streamtext",
    "https://hono.dev/#bindings",
    "https://hono.dev/#routing-with-host-header-value",
    "https://hono.dev/#multiple-files-with-same-name",
    "https://hono.dev/examples/zod-openapi",
    "https://hono.dev/#zod-validator-middleware",
    "https://hono.dev/#timeout-middleware",
    "https://hono.dev/examples/with-remix",
    "https://hono.dev/#client",
    "https://hono.dev/#integration-with-html-middleware",
    "https://hono.dev/#next-step",
    "https://hono.dev/docs/concepts/stacks",
    "https://hono.dev/#ultrafast",
    "https://hono.dev/#encrypted-http2",
    "https://hono.dev/#deploy-via-the-cloudflare-dashboard-with-github",
    "https://hono.dev/#more-options",
    "https://hono.dev/#secure-and-host-prefix",
    "https://hono.dev/#keyframes",
    "https://hono.dev/#token-string-1",
    "https://hono.dev/#http2",
    "https://hono.dev/docs/guides/others",
    "https://hono.dev/#verify",
    "https://hono.dev/#header",
    "https://hono.dev/#verifyuser-username-string-password-string-c-context-boolean-promise-boolean",
    "https://hono.dev/#azure-functions",
    "https://hono.dev/#set-up-prisma-in-your-project",
    "https://hono.dev/#using-adapters-for-deno-and-bun",
    "https://hono.dev/#var",
    "https://hono.dev/docs/middleware/builtin/cors",
    "https://hono.dev/#logging-details",
    "https://hono.dev/#cloudflare-testing",
    "https://hono.dev/#recipes",
    "https://hono.dev/docs/getting-started/deno",
    "https://hono.dev/docs/middleware/builtin/trailing-slash",
    "https://hono.dev/#invalidusermessage-string-object-messagefunction",
    "https://hono.dev/#not-found",
    "https://hono.dev/#server",
    "https://hono.dev/#deletecookie",
    "https://hono.dev/#path-parameter",
    "https://hono.dev/#context-storage-middleware",
    "https://hono.dev/#vary-string-string",
    "https://hono.dev/#enabled-boolean-c-context-boolean",
    "https://hono.dev/#colorize-boolean",
    "https://hono.dev/docs/getting-started/bun",
    "https://hono.dev/#_2-using-viewtransition-with-keyframes",
    "https://hono.dev/#the-hono-jsx-dom-runtime",
    "https://hono.dev/docs/getting-started/basic",
    "https://hono.dev/#motivation",
    "https://hono.dev/#wait-boolean",
    "https://hono.dev/#before-v3-10-0-deprecated",
    "https://hono.dev/docs/concepts/routers",
    "https://hono.dev/docs/guides/middleware",
    "https://hono.dev/docs/middleware/builtin/etag",
    "https://hono.dev/#prerequisites",
    "https://hono.dev/docs/guides/jsx-dom",
    "https://hono.dev/#fn-printfunc-str-string-rest-string",
    "https://hono.dev/#allowheaders-string",
    "https://hono.dev/#_1-install-bun",
    "https://hono.dev/#edit-vite-config-ts",
    "https://hono.dev/#defining-multiple-users",
    "https://hono.dev/#on-node-js",
    "https://hono.dev/#body-limit-middleware",
    "https://hono.dev/#middleware",
    "https://hono.dev/#ipv4",
    "https://hono.dev/#verbose-boolean",
    "https://hono.dev/#exception",
    "https://hono.dev/#linearrouter",
    "https://hono.dev/#generics",
    "https://hono.dev/docs/middleware/builtin/body-limit",
    "https://hono.dev/#text",
    "https://hono.dev/#input",
    "https://hono.dev/#propswithchildren",
    "https://hono.dev/#alibaba-cloud-function-compute",
    "https://hono.dev/#space-number",
    "https://hono.dev/#type-definitions",
    "https://hono.dev/#counter-example",
    "https://hono.dev/#available-helpers",
    "https://hono.dev/#memoization",
    "https://hono.dev/#middleware-conflict",
    "https://hono.dev/#stream",
    "https://hono.dev/#streamsse",
    "https://hono.dev/#mount",
    "https://hono.dev/#blob",
    "https://hono.dev/docs/helpers/accepts",
    "https://hono.dev/examples/file-upload",
    "https://hono.dev/#vite-plugin",
    "https://hono.dev/#typed-htmx",
    "https://hono.dev/docs/guides/best-practices#building-a-larger-application",
    "https://hono.dev/#file-extension",
    "https://hono.dev/#etag-middleware",
    "https://hono.dev/#cookie-helper",
    "https://hono.dev/docs/getting-started/nodejs",
    "https://hono.dev/#cloudflare-durable-objects",
    "https://hono.dev/docs/middleware/builtin/jwt",
    "https://hono.dev/examples/proxy",
    "https://hono.dev/#secure-the-api",
    "https://hono.dev/examples/cloudflare-queue",
    "https://hono.dev/#methods",
    "https://hono.dev/#infer",
    "https://hono.dev/#cachename-string-c-context-string-promise-string",
    "https://hono.dev/#validators",
    "https://hono.dev/examples/",
    "https://hono.dev/#access-aws-lambda-object",
    "https://hono.dev/#custom-fetch-method",
    "https://hono.dev/#web-api",
    "https://hono.dev/#with-react",
    "https://hono.dev/#totaldescription-boolean",
    "https://hono.dev/#getting-started",
    "https://hono.dev/#logger-middleware",
    "https://hono.dev/#secret-string-1",
    "https://hono.dev/#route-and-filename",
    "https://hono.dev/#including-slashes",
    "https://hono.dev/#using-prisma-on-cloudflare-workers",
    "https://hono.dev/docs/middleware/builtin/csrf",
    "https://hono.dev/#cookie-string",
    "https://hono.dev/#deploy-from-github-action",
    "https://hono.dev/#lambda-edge",
    "https://hono.dev/#setting-permission-policy",
    "https://hono.dev/#context-access-inside-middleware-arguments",
    "https://hono.dev/#validation",
    "https://hono.dev/docs/getting-started/vercel",
    "https://hono.dev/#retainedheaders-string",
    "https://hono.dev/#lambda-response-streaming",
    "https://hono.dev/examples/stripe-webhook",
    "https://hono.dev/",
    "https://hono.dev/docs/api/context",
    "https://hono.dev/docs/api/request",
    "https://hono.dev/#fastly-compute",
    "https://hono.dev/#nested-layouts",
    "https://hono.dev/#frequently-asked-questions",
    "https://hono.dev/#cors-middleware",
    "https://hono.dev/#authentication",
    "https://hono.dev/#pretty-json-middleware",
    "https://hono.dev/#dev-helper",
    "https://hono.dev/#csrf-protection",
    "https://hono.dev/#netlify",
    "https://hono.dev/docs/getting-started/aws-lambda",
    "https://hono.dev/docs/helpers/websocket",
    "https://hono.dev/docs/getting-started/lambda-edge",
    "https://hono.dev/#_3-hello-world",
    "https://hono.dev/#sponsoring",
    "https://hono.dev/#origin-string-string-origin-string-c-context-string",
    "https://hono.dev/#file-upload",
    "https://hono.dev/docs/middleware/builtin/jsx-renderer",
    "https://hono.dev/docs/api/routing",
    "https://hono.dev/docs/helpers/streaming",
    "https://hono.dev/docs/middleware/builtin/method-override",
    "https://hono.dev/#routing-with-hostname",
    "https://hono.dev/#environment-dependent-cors-configuration",
    "https://hono.dev/#realm-string",
    "https://hono.dev/#is-there-an-official-renovate-config-for-hono",
    "https://hono.dev/#cachecontrol-string",
    "https://hono.dev/#_2-setup",
    "https://hono.dev/#cache-middleware",
    "https://hono.dev/#building-a-larger-application",
    "https://hono.dev/#suspense",
    "https://hono.dev/#throw-httpexception",
    "https://hono.dev/docs/helpers/ssg",
    "https://hono.dev/#conclusion",
    "https://hono.dev/#validation-with-zod",
    "https://hono.dev/#queries",
    "https://hono.dev/#supports-string",
    "https://hono.dev/#match-accepts-accept-config-acceptsconfig-string",
    "https://hono.dev/#request",
    "https://hono.dev/#return-json",
    "https://hono.dev/#jwt-authentication-helper",
    "https://hono.dev/#autoend-boolean",
    "https://hono.dev/#adapter",
    "https://hono.dev/docs/middleware/builtin/ip-restriction",
    "https://hono.dev/examples/grouping-routes-rpc",
    "https://hono.dev/#weak-boolean",
    "https://hono.dev/#maxsize-number",
    "https://hono.dev/#jsx",
    "https://hono.dev/#github-repository",
    "https://hono.dev/#keygenerator-c-context-string-promise-string",
    "https://hono.dev/#routers",
    "https://hono.dev/#onlyssg",
    "https://hono.dev/#output",
    "https://hono.dev/#body",
    "https://hono.dev/#password-string",
    "https://hono.dev/#except",
    "https://hono.dev/#use-html-to-speed-up-the-process-instead-of-memo",
    "https://hono.dev/#aws-lambda",
    "https://hono.dev/#contributing",
    "https://hono.dev/docs/guides/helpers",
    "https://hono.dev/#pylon",
    "https://hono.dev/#conninfo-helper",
    "https://hono.dev/#remix",
    "https://hono.dev/examples/web-api",
    "https://hono.dev/#basic-auth-middleware",
    "https://hono.dev/#client-components",
    "https://hono.dev/#on-bun",
    "https://hono.dev/#app-hono",
    "https://hono.dev/#jwt-auth-middleware",
    "https://hono.dev/#users-username-string-password-string",
    "https://hono.dev/examples/prisma",
    "https://hono.dev/#remix-hono",
    "https://hono.dev/#onerror-onerror",
    "https://hono.dev/#credentials-boolean",
    "https://hono.dev/#philosophy",
    "https://hono.dev/#grouping-without-changing-base",
    "https://hono.dev/#secure-headers-middleware",
    "https://hono.dev/#_2-2-setup-an-existing-project",
    "https://hono.dev/#method",
    "https://hono.dev/#miscellaneous",
    "https://hono.dev/#deno-deploy",
    "https://hono.dev/#testclient",
    "https://hono.dev/#inserting-raw-html",
    "https://hono.dev/docs",
    "https://hono.dev/#service-worker",
    "https://hono.dev/#cx",
    "https://hono.dev/examples/pylon",
    "https://hono.dev/docs/middleware/builtin/combine",
    "https://hono.dev/#examples",
    "https://hono.dev/#override-type-definitions",
    "https://hono.dev/#use-cases",
    "https://hono.dev/#exposeheaders-string",
    "https://hono.dev/#_1-install-cli",
    "https://hono.dev/#context",
    "https://hono.dev/#precompressed",
    "https://hono.dev/docs/middleware/builtin/context-storage",
    "https://hono.dev/#bearer-auth-middleware",
    "https://hono.dev/#init-option",
    "https://hono.dev/#hono-tiny",
    "https://hono.dev/#accepts-helper",
    "https://hono.dev/#factory-createapp",
    "https://hono.dev/#req",
    "https://hono.dev/#executionctx",
    "https://hono.dev/#don-t-make-controllers-when-possible",
    "https://hono.dev/docs/getting-started/fastly",
    "https://hono.dev/#grouping-routes-for-rpc",
    "https://hono.dev/#serve-static-files",
    "https://hono.dev/#creating-a-new-project",
    "https://hono.dev/#query",
    "https://hono.dev/#specify-type-arguments-manually",
    "https://hono.dev/#install-prisma",
    "https://hono.dev/docs/getting-started/ali-function-compute",
    "https://hono.dev/#bun",
    "https://hono.dev/#redirect",
    "https://hono.dev/#_4-deploy",
    "https://hono.dev/#query-string",
    "https://hono.dev/#split-your-app-and-client-into-multiple-files",
    "https://hono.dev/#trailing-slash-middleware",
    "https://hono.dev/#accessing-eventcontext",
    "https://hono.dev/#adding-an-edge-function",
    "https://hono.dev/#parsebody",
    "https://hono.dev/#header-acceptheader",
    "https://hono.dev/#_2-hello-world",
    "https://hono.dev/#render-setrenderer",
    "https://hono.dev/#createmiddleware",
    "https://hono.dev/#setup-prisma-accelerate",
    "https://hono.dev/docs/middleware/builtin/basic-auth",
    "https://hono.dev/docs/guides/rpc#client",
    "https://hono.dev/#alg-algorithmtypes",
    "https://hono.dev/#tossg",
    "https://hono.dev/docs/middleware/builtin/bearer-auth",
    "https://hono.dev/#ip-restriction-middleware",
    "https://hono.dev/#regexprouter",
    "https://hono.dev/#decode",
    "https://hono.dev/#project-structure",
    "https://hono.dev/#where-does-hono-fit-in",
    "https://hono.dev/#aftergeneratehook",
    "https://hono.dev/docs/helpers/html",
    "https://hono.dev/#routing-priority",
    "https://hono.dev/#htmx",
    "https://hono.dev/#implementing-the-webhook-api-by-hosting-environment-or-framework",
    "https://hono.dev/#lightweight",
    "https://hono.dev/#options-2",
    "https://hono.dev/getting-started/cloudflare-workers#bindings",
    "https://hono.dev/#payload-unknown",
    "https://hono.dev/#which-preset-should-i-use",
    "https://hono.dev/#status-code",
    "https://hono.dev/#insert-snippets-into-jsx",
    "https://hono.dev/#for-example",
    "https://hono.dev/#deno",
    "https://hono.dev/#global-styles",
    "https://hono.dev/#generate-file",
    "https://hono.dev/#path-parameters",
    "https://hono.dev/#get-access-to-the-hono-context",
    "https://hono.dev/#async-component",
    "https://hono.dev/#setting-content-security-policy",
    "https://hono.dev/#VPContent",
    "https://hono.dev/#using-variables-in-middleware",
    "https://hono.dev/#startviewtransition-family",
    "https://hono.dev/docs/concepts/motivation",
    "https://hono.dev/#example-1",
    "https://hono.dev/#call-the-api",
    "https://hono.dev/examples/cloudflare-vitest",
    "https://hono.dev/#default-string",
    "https://hono.dev/#in-production",
    "https://hono.dev/#_1-install-deno",
    "https://hono.dev/#getroutername",
    "https://hono.dev/#_3-run",
    "https://hono.dev/#notfound",
    "https://hono.dev/#routepath",
    "https://hono.dev/#the-retained-headers",
    "https://hono.dev/#using-middleware",
    "https://hono.dev/#cloudflare-pages-middleware",
    "https://hono.dev/docs/getting-started/azure-functions",
    "https://hono.dev/#dockerfile",
    "https://hono.dev/#following-the-best-practices",
    "https://hono.dev/#html-helper",
    "https://hono.dev/#openapi",
    "https://hono.dev/#hook",
    "https://hono.dev/#invalidtokenmessage-string-object-messagefunction",
    "https://hono.dev/#using-swr",
    "https://hono.dev/#node-js",
    "https://hono.dev/#presets",
    "https://hono.dev/#basic-example",
    "https://hono.dev/#encoding-gzip-deflate",
    "https://hono.dev/#event",
    "https://hono.dev/docs/middleware/builtin/timing",
    "https://hono.dev#invalidauthenticationheadermessage-string-object-messagefunction",
    "https://hono.dev/docs/helpers/factory#createmiddleware",
    "https://hono.dev/docs/guides/rpc",
    "https://hono.dev/docs/helpers/testing",
    "https://hono.dev/#testing-helper",
    "https://hono.dev/#sign",
    "https://hono.dev/#ssg-helper",
    "https://hono.dev/#with-zod",
    "https://hono.dev/#extending",
    "https://hono.dev/#alg-string",
    "https://hono.dev/docs/getting-started/supabase-functions",
    "https://hono.dev/#strict-mode",
    "https://hono.dev/#onnotfound",
    "https://hono.dev/#cloudflare-workers",
    "https://hono.dev/#router-option",
    "https://hono.dev/#headers",
    "https://hono.dev/#token-string",
    "https://hono.dev/#request-and-response",
    "https://hono.dev/#change-port-number",
    "https://hono.dev/docs/concepts/benchmarks",
    "https://hono.dev/docs/middleware/builtin/secure-headers",
    "https://hono.dev/#_4-run",
    "https://hono.dev/#accepts",
    "https://hono.dev/#fragment",
    "https://hono.dev/#client-side",
    "https://hono.dev/#supported-algorithmtypes",
    "https://hono.dev/#hono-quick",
    "https://hono.dev/#factory-createhandlers",]


// console.log(Array.from(new Set(arr)).length) // 320

const filtered = arr.filter((item) => !item.includes("#")).length
console.log(filtered)

// https://neon.tech/docs/postgres/external-projects
// All Links: 2065 Time taken: 181.793222581s