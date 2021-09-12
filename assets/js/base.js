_desktop = `
<div id="nav-bar" style="list-style-type: none;overflow: hidden;background-color: black;position: fixed;top: 0;left: 0;width: 100%;margin: 0;">
    <center>
    <a href="#about" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">About</a>
    <a href="mailto:saptakbhoumik@gmail.com" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">Contact</a>
    <a href="https://github.com/Swallow-lang" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">GitHub</a>
    <a href="" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">Docs</a>
    <a href="#tools" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">Tools</a>
    </center>
</div>

<div style="padding: 140px;background-color: black;" align="center">
    <h1 style="font-family: Arial;font-size: 80px;color: whitesmoke;">Swallow</h1>
    <p style="font-family: Calibri;color: #e2e2e2;opacity:0.5;font-size: 36px;animation: fadeIn linear 2s;-webkit-animation: fadeIn linear 2s;-moz-animation: fadeIn linear 2s;-o-animation: fadeIn linear 2s;-ms-animation: fadeIn linear 2s;">A Fast alternative language to Python,<br>Built using V and C programming language.</p>
</div>

<div id="about" style="background-color: whitesmoke;padding: 150px;animation: fadeIn linear 2s;-webkit-animation: fadeIn linear 2s;-moz-animation: fadeIn linear 2s;-o-animation: fadeIn linear 2s;-ms-animation: fadeIn linear 2s;">
    <h1 style="font-family: Arial;color: #ababab;padding: 14px;">About</h1>
    <p style="font-family: Calibri;color: #626262;padding-left: 14px;font-size: 18px;">An easy to use systems programming language with python like syntax.</p>
    <br>
    <h1 style="font-family: Arial;color: #ababab;padding: 14px;">Why am I creating this language?</h1>
    <p style="font-family: Calibri;color: #626262;padding-left: 14px;font-size: 18px;">I am creating it as a fast alternative to python and as an easy alternative to c</p>
    <br>
    <h1 style="font-family: Arial;color: #ababab;padding: 14px;">How does it work?</h1>
    <p style="font-family: Calibri;color: #626262;padding-left: 14px;font-size: 18px;">You can consider it to be a superset of c which compiles to clean c.<br>So valid c code is also valid swallow code(the language is named swallow).</p>
</div>

<div id="get-basics" align="right">
    <h1 style="font-family: Arial;color: #ababab;padding: 14px;">Get Basic:</h1>
    <pre>
    <code style="background-color: #f2f3f5;color: #4f5660 ;padding: 14px;display: block;width: 200px;">
    def main():
        print("hi")
    </code>    
    </pre>    
</div>

<div id="tools" style="background-color: white;">
    <img style="width: 500px;" src="https://i.imgur.com/vDp2Rry.jpg">
</div>

<div id="footer" style="background-color: whitesmoke;">
    <center>
        <p style="font-family: Calibri;padding: 30px;margin: 0;color: #a4a4a9;float: left;">Copyright © 2021 Swallow language. All rights reserved.</p>
        <a href="https://www.mozilla.org/en-US/MPL/2.0/" style="font-family: Calibri;padding: 30px;float: left;margin: 0;color: #909092;text-decoration: none;">License</a>
        <a href="https://en.wikipedia.org/wiki/India" style="font-family: Calibri;padding: 30px;float: right;margin: 0;color: #909092;text-decoration: none;">India</a>
        <a href="https://github.com/Swallow-lang/swallow/issues" style="font-family: Calibri;padding: 30px;float: left;margin: 0;color: #909092;text-decoration: none;">Report Issue</a>
        <a href="https://github.com/Swallow-lang/swallow/pulls" style="font-family: Calibri;padding: 30px;float: left;margin: 0;color: #7ebde2;text-decoration: none;">Contributing</a>
    </center>
</div>
`

_mobile = `
Currenly this website does'nt support mobile.
`

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

if (isMobile) {
    document.write(_mobile)
} else {
    document.write(_desktop)
}


