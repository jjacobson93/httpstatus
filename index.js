// HTTP status codes, defined in RFC 2616.
const statuses = {
    Continue          : 100,
    SwitchingProtocols: 101,

    OK                  : 200,
    Created             : 201,
    Accepted            : 202,
    NonAuthoritativeInfo: 203,
    NoContent           : 204,
    ResetContent        : 205,
    PartialContent      : 206,

    MultipleChoices  : 300,
    MovedPermanently : 301,
    Found            : 302,
    SeeOther         : 303,
    NotModified      : 304,
    UseProxy         : 305,
    TemporaryRedirect: 307,

    BadRequest                  : 400,
    Unauthorized                : 401,
    PaymentRequired             : 402,
    Forbidden                   : 403,
    NotFound                    : 404,
    MethodNotAllowed            : 405,
    NotAcceptable               : 406,
    ProxyAuthRequired           : 407,
    RequestTimeout              : 408,
    Conflict                    : 409,
    Gone                        : 410,
    LengthRequired              : 411,
    PreconditionFailed          : 412,
    RequestEntityTooLarge       : 413,
    RequestURITooLong           : 414,
    UnsupportedMediaType        : 415,
    RequestedRangeNotSatisfiable: 416,
    ExpectationFailed           : 417,
    Teapot                      : 418,

    InternalServerError    : 500,
    NotImplemented         : 501,
    BadGateway             : 502,
    ServiceUnavailable     : 503,
    GatewayTimeout         : 504,
    HTTPVersionNotSupported: 505,

    // New HTTP status codes from RFC 6585.
    PreconditionRequired         : 428,
    TooManyRequests              : 429,
    RequestHeaderFieldsTooLarge  : 431,
    NetworkAuthenticationRequired: 511,

    text
};

const statusText = {
    [statuses.Continue]:           "Continue",
    [statuses.SwitchingProtocols]: "Switching Protocols",

    [statuses.OK]:                   "OK",
    [statuses.Created]:              "Created",
    [statuses.Accepted]:             "Accepted",
    [statuses.NonAuthoritativeInfo]: "Non-Authoritative Information",
    [statuses.NoContent]:            "No Content",
    [statuses.ResetContent]:         "Reset Content",
    [statuses.PartialContent]:       "Partial Content",

    [statuses.MultipleChoices]:   "Multiple Choices",
    [statuses.MovedPermanently]:  "Moved Permanently",
    [statuses.Found]:             "Found",
    [statuses.SeeOther]:          "See Other",
    [statuses.NotModified]:       "Not Modified",
    [statuses.UseProxy]:          "Use Proxy",
    [statuses.TemporaryRedirect]: "Temporary Redirect",

    [statuses.BadRequest]:                   "Bad Request",
    [statuses.Unauthorized]:                 "Unauthorized",
    [statuses.PaymentRequired]:              "Payment Required",
    [statuses.Forbidden]:                    "Forbidden",
    [statuses.NotFound]:                     "Not Found",
    [statuses.MethodNotAllowed]:             "Method Not Allowed",
    [statuses.NotAcceptable]:                "Not Acceptable",
    [statuses.ProxyAuthRequired]:            "Proxy Authentication Required",
    [statuses.RequestTimeout]:               "Request Timeout",
    [statuses.Conflict]:                     "Conflict",
    [statuses.Gone]:                         "Gone",
    [statuses.LengthRequired]:               "Length Required",
    [statuses.PreconditionFailed]:           "Precondition Failed",
    [statuses.RequestEntityTooLarge]:        "Request Entity Too Large",
    [statuses.RequestURITooLong]:            "Request URI Too Long",
    [statuses.UnsupportedMediaType]:         "Unsupported Media Type",
    [statuses.RequestedRangeNotSatisfiable]: "Requested Range Not Satisfiable",
    [statuses.ExpectationFailed]:            "Expectation Failed",
    [statuses.Teapot]:                       "I'm a teapot",

    [statuses.InternalServerError]:     "Internal Server Error",
    [statuses.NotImplemented]:          "Not Implemented",
    [statuses.BadGateway]:              "Bad Gateway",
    [statuses.ServiceUnavailable]:      "Service Unavailable",
    [statuses.GatewayTimeout]:          "Gateway Timeout",
    [statuses.HTTPVersionNotSupported]: "HTTP Version Not Supported",

    [statuses.PreconditionRequired]:          "Precondition Required",
    [statuses.TooManyRequests]:               "Too Many Requests",
    [statuses.RequestHeaderFieldsTooLarge]:   "Request Header Fields Too Large",
    [statuses.NetworkAuthenticationRequired]: "Network Authentication Required",
}

// `text` returns a text for the HTTP status code.
function text(code) {
    return statusText[code];
}

module.exports = statuses;