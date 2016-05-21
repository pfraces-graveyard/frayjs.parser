module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = /^[ \t\n]/,
        peg$c2 = { type: "class", value: "[ \\t\\n]", description: "[ \\t\\n]" },
        peg$c3 = "'",
        peg$c4 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c5 = "\"",
        peg$c6 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c7 = peg$FAILED,
        peg$c8 = /^[^<>{}" \t\n]/,
        peg$c9 = { type: "class", value: "[^<>{}\" \\t\\n]", description: "[^<>{}\" \\t\\n]" },
        peg$c10 = function(word) {
          return word.join('');
        },
        peg$c11 = function(text) {
          return text.join(' ');
        },
        peg$c12 = /^[a-zA-Z_]/,
        peg$c13 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c14 = /^[a-zA-Z0-9_]/,
        peg$c15 = { type: "class", value: "[a-zA-Z0-9_]", description: "[a-zA-Z0-9_]" },
        peg$c16 = function(first, rest) {
          return first + rest.join('');
        },
        peg$c17 = ".",
        peg$c18 = { type: "literal", value: ".", description: "\".\"" },
        peg$c19 = function(member) {
          return member;
        },
        peg$c20 = function(first, rest) {
          return [ first ].concat(rest);
        },
        peg$c21 = "{{",
        peg$c22 = { type: "literal", value: "{{", description: "\"{{\"" },
        peg$c23 = "}}",
        peg$c24 = { type: "literal", value: "}}", description: "\"}}\"" },
        peg$c25 = function(expr) {
          return expr;
        },
        peg$c26 = "=",
        peg$c27 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c28 = null,
        peg$c29 = function(name, value) {
          return { name: name, value: value || '' };
        },
        peg$c30 = function(attrs) {
          return attrs.reduce(function (acc, attr) {
            acc[attr.name] = attr.value;
            return acc;
          }, {});
        },
        peg$c31 = function(value) {
          return { type: 'TextNode', value: value };
        },
        peg$c32 = function(value) {
          return { type: 'ExprNode', value: value };
        },
        peg$c33 = "<",
        peg$c34 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c35 = ">",
        peg$c36 = { type: "literal", value: ">", description: "\">\"" },
        peg$c37 = "</",
        peg$c38 = { type: "literal", value: "</", description: "\"</\"" },
        peg$c39 = function(name, attrs, children) {
          return { type: 'TagNode', name: name, attrs: attrs, children: children };
        },
        peg$c40 = function(node) {
          return node;
        },
        peg$c41 = function(nodes) {
          var root = { type: 'TagNode', name: 'div', attrs: {}, children: nodes };
          return { type: 'Root', root: root };
        },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parseRoot();

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      s0 = [];
      if (peg$c1.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c1.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c2); }
        }
      }

      return s0;
    }

    function peg$parsesinglequote() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 39) {
        s0 = peg$c3;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }

      return s0;
    }

    function peg$parsedoublequote() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 34) {
        s0 = peg$c5;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }

      return s0;
    }

    function peg$parseword() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsews();
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c8.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c9); }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c8.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c9); }
            }
          }
        } else {
          s2 = peg$c7;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c10(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    function peg$parsetext() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseword();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseword();
        }
      } else {
        s1 = peg$c7;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c11(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseidentifier() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c12.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c14.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c14.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c15); }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c16(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    function peg$parsemember() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 46) {
        s1 = peg$c17;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseidentifier();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    function peg$parsedotexpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseidentifier();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsemember();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsemember();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c20(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    function peg$parseexpr() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parsews();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c21) {
          s2 = peg$c21;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c22); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsews();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsedotexpr();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsews();
              if (s5 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c23) {
                  s6 = peg$c23;
                  peg$currPos += 2;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c24); }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c25(s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c7;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c7;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c7;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c7;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    function peg$parsetagattr() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parsews();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseidentifier();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c26;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c27); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsedoublequote();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsetext();
              if (s5 === peg$FAILED) {
                s5 = peg$c28;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parsedoublequote();
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c29(s2, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c7;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c7;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c7;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c7;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    function peg$parsetagattrs() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsetagattr();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsetagattr();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c30(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseTextNode() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsetext();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c31(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseExprNode() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseexpr();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c32(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseTagNode() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

      s0 = peg$currPos;
      s1 = peg$parsews();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 60) {
          s2 = peg$c33;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c34); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseidentifier();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsetagattrs();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 62) {
                s5 = peg$c35;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c36); }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parseNode();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parseNode();
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsews();
                  if (s7 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c37) {
                      s8 = peg$c37;
                      peg$currPos += 2;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c38); }
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseidentifier();
                      if (s9 === peg$FAILED) {
                        s9 = peg$c28;
                      }
                      if (s9 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 62) {
                          s10 = peg$c35;
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c36); }
                        }
                        if (s10 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c39(s3, s4, s6);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c7;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c7;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c7;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c7;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c7;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c7;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c7;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c7;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    function peg$parseNode() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseTextNode();
      if (s1 === peg$FAILED) {
        s1 = peg$parseExprNode();
        if (s1 === peg$FAILED) {
          s1 = peg$parseTagNode();
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c40(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseRoot() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseNode();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseNode();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsews();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c41(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c7;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c7;
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})()