var lop = require("lop");
var RegexTokeniser = lop.RegexTokeniser;

exports.tokenise = tokenise;

var stringPrefix = "'((?:\\\\.|[^'])*)";

function tokenise(string) {
    var identifierCharacter = "(?:[a-zA-Z\\-_]|\\\\.)";
    var tokeniser = new RegexTokeniser([
        {name: "identifier", regex: new RegExp("(" + identifierCharacter + "(?:" + identifierCharacter + "|[0-9])*)")},
        {name: "dot", regex: new RegExp('\.')},
        {name: "colon", regex: new RegExp(':')},
        {name: "gt", regex: new RegExp('>')},
        {name: "whitespace", regex: new RegExp('\s+')},
        {name: "arrow", regex: new RegExp('=>')},
        {name: "equals", regex: new RegExp('=')},
        {name: "startsWith", regex: new RegExp('\^=')},
        {name: "open-paren", regex: new RegExp('\(')},
        {name: "close-paren", regex: new RegExp('\)')},
        {name: "open-square-bracket", regex: new RegExp('\[')},
        {name: "close-square-bracket", regex: new RegExp('\]')},
        {name: "string", regex: new RegExp(stringPrefix + "'")},
        {name: "unterminated-string", regex: new RegExp(stringPrefix)},
        {name: "integer", regex: new RegExp('([0-9]+)')},
        {name: "choice", regex: new RegExp('\|')},
        {name: "bang", regex: new RegExp('(!)')}
    ]);
    return tokeniser.tokenise(string);
}
