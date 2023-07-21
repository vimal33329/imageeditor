const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Pay</title>
    <!-- Bootstrap 5 CSS -->
    <link rel="stylesheet" href="./css/bootstrap.min.css"  crossorigin="anonymous" />
	<link rel="stylesheet" href="./css/style.css"  />

    </head>
<body>
		<div class="col-md-12 text-center"><h3>Image Editor</h3></div>
	    <div class="container">

        <div class="button-container" id="button-container">
            <button id="button-draw" class="button btn btn-sm btn-outline-dark" onclick='startDraw()' title="Draw"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/draw.svg" /> </button>
            <button id="button-clear" class="button btn btn-sm btn-outline-dark" onclick='clearCanvas()' title="Clear All"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/clear-all.svg" /></button>
            <button id="button-select" class="button btn btn-sm btn-outline-dark" onclick='select()' title="Select"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/select.svg" /> </button>
            <button id="button-hex" class="button btn btn-sm btn-outline-dark" onclick='addHex()' title="Hexagon"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/hexagon.svg" /></button>
            <button id="button-pent" class="button btn btn-sm btn-outline-dark" onclick='addPent()' title="Pentagon"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/pentagon.svg" /></button>
            <button id="button-tri" class="button btn btn-sm btn-outline-dark" onclick='addTriangle()' title="Triangle"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/triangle.svg" /></button>
            <button id="button-rec" class="button btn btn-sm btn-outline-dark" onclick='addRect()' title="Rectangle"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/rectangle.svg" /></button>
            <button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='addSingle()' title="Single Bond"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/single-bond.svg" /></button>
            <button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='addDouble()' title="Double Bond"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/double-bond.svg" /></button>
            <button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='addTriple()' title="Triple Bond"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/triple-bond.svg" /></button>
            <button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='addWedge()' title="Wedge"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/wedge.svg" /></button>
            <button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='addWedgeDash()' title="Wedge Dash"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/wedge-dash.svg" /></button>
            <button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='addText()' title="Text"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/text.svg" /></button>
            <button id="button-subscript" class="button btn btn-sm btn-outline-dark" onclick="subScript()" title="Subscript"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/text-sub.svg" /></button>
            <button id="button-superscript" class="button btn btn-sm btn-outline-dark" onclick="superScript()" title="Superscript"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/text-sup.svg" /></button>
            <button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='addArrow()' title="Arrow"><img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/arrow.svg" /></button>
			<button id="button-line" class="button btn btn-sm btn-outline-dark" onclick='DownloadPDF()' title="Arrow">Download</button>

            <!-- button-save for testing: output to console.log -->
            <button id="button-save" class="button btn btn-sm btn-outline-dark" onclick='saveCanvas()' style="display:none;">Save</button>

            <input id="filereader" type="file" accept="image/*" />
            <label for="filereader" class="button btn btn-sm btn-outline-dark custom-file-upload" title="Upload Image">
                <img src="https://raw.githubusercontent.com/craigmateo/chemistry-drawing/77de15031ab1d4dab25e25269d46334f9143ddaa/assets/svg/image.svg" />
            </label>
        </div>

        <div id="context-menu">
            <div class="item" id="toAdelante" hidden>Bring forward</div>
            <div class="item" id="tofront" hidden>Bring to front</div>
            <div class="item" id="toAtras" hidden>Send backwards</div>
            <div class="item" id="toback" hidden>Send to back</div>
        </div>

        <canvas id="a" width="632px" height="500"></canvas>

    </div>
<!-- partial -->


    <!-- Bootstrap 5 JavaScript -->
    <script src="/js/bootstrap.min.js" ></script>
	<script src="/js/jquery.min.js" ></script>
	<script src="/js/fabric.min.js" ></script>

	<script src="/js/script.js"></script>
</body>
</html>
`;

module.exports = html;