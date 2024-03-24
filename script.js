var in1 = "311";
var in2 = "311";
var in3 = "311";
var in4 = "311";
var final11 = "";
var final21 = "";
var final31 = "";
var cutstring = "";
var cutat = -1;
var coefficient = 1;

function setZoom(zoomLevel) {
    document.body.style.zoom = zoomLevel;
}

function updateScale() {
    var selectedOption = document.getElementById("scaleselection").value;
    if (selectedOption === "") {
        alert("Επιλέξτε μάρτυρα μοριακού βάρους.");
        return;
    }
    if (selectedOption === "4-8-14-20") {
        coefficient = 2;
        window.in1 = "4";
        window.in2 = "8";
        window.in3 = "14";
        window.in4 = "20";
    } else if (selectedOption === "10-20-35-50") {
        coefficient = 1;
        window.in1 = "10";
        window.in2 = "20";
        window.in3 = "35";
        window.in4 = "50";
    } else if (selectedOption === "20-40-70-100") {
        coefficient = 1 / 2;
        window.in1 = "20";
        window.in2 = "40";
        window.in3 = "70";
        window.in4 = "100";
    } else if (selectedOption === "200-400-700-1000") {
        coefficient = 1 / 20;
        window.in1 = "200";
        window.in2 = "400";
        window.in3 = "700";
        window.in4 = "1000";
    } else if (selectedOption === "400-800-1400-2000") {
        coefficient = 1 / 40;
        window.in1 = "400";
        window.in2 = "800";
        window.in3 = "1400";
        window.in4 = "2000";
    } else if (selectedOption === "600-1200-2100-3000") {
        coefficient = 1 / 60;
        window.in1 = "600";
        window.in2 = "1200";
        window.in3 = "2100";
        window.in4 = "3000";
    }
    document.getElementById("scaleinput0").value = 5;
    document.getElementById("scaleinput1").value = 10;
    document.getElementById("scaleinput2").value = 17;
    document.getElementById("scaleinput3").value = 25;
}

function testScale(selectedOption) {
    if (selectedOption === "") {
        alert("Επιλέξτε μάρτυρα μοριακού βάρους.");
        return;
    }
    if (selectedOption === "4-8-14-20") {
        coefficient = 2;
        window.in1 = "4";
        window.in2 = "8";
        window.in3 = "14";
        window.in4 = "20";
    } else if (selectedOption === "10-20-35-50") {
        coefficient = 1;
        window.in1 = "10";
        window.in2 = "20";
        window.in3 = "35";
        window.in4 = "50";
    } else if (selectedOption === "20-40-70-100") {
        coefficient = 1 / 2;
        window.in1 = "20";
        window.in2 = "40";
        window.in3 = "70";
        window.in4 = "100";
    } else if (selectedOption === "200-400-700-1000") {
        coefficient = 1 / 20;
        window.in1 = "200";
        window.in2 = "400";
        window.in3 = "700";
        window.in4 = "1000";
    } else if (selectedOption === "400-800-1400-2000") {
        coefficient = 1 / 40;
        window.in1 = "400";
        window.in2 = "800";
        window.in3 = "1400";
        window.in4 = "2000";
    } else if (selectedOption === "600-1200-2100-3000") {
        coefficient = 1 / 60;
        window.in1 = "600";
        window.in2 = "1200";
        window.in3 = "2100";
        window.in4 = "3000";
    }
    document.getElementById("scaleinput0").value = 5;
    document.getElementById("scaleinput1").value = 10;
    document.getElementById("scaleinput2").value = 17;
    document.getElementById("scaleinput3").value = 25;
}

function initializeTable() {
    var scaleCells = document.querySelectorAll(".black");
    // Iterate through all cells and set them to default black color
    for (var i = 0; i < scaleCells.length; i++) {
        scaleCells[i].classList.remove("white");
        scaleCells[i].classList.remove("gray");
        scaleCells[i].classList.add("black");
        scaleCells[i].textContent = "";
    }
}

function reverseComplement(seq) {
    const complement = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };
    return seq.split('').reverse().map(n => complement[n]).join('');
}

function finalseqs() {
    function getSubstring(str, start, end) {
        return str.substring(start, end);
    }
    const input41 = document.getElementById("input41").value;
    const start = input41.length;
    const input42 = document.getElementById("input42").value;
    const finish = input42.length;
    const finalfp = reverseComplement(input41);
    function findLastIndex(str, substr) { return str.lastIndexOf(substr); }
    function findFirstIndex(str, primer) { return str.indexOf(primer); }

    const input11 = document.getElementById("input11").value;
    const input21 = document.getElementById("input21").value;
    const input31 = document.getElementById("input31").value;

    const lastindex11 = findLastIndex(input11, finalfp);
    const new11 = input11.substring(0, lastindex11 + finalfp.length);
    const firstIndex11 = findFirstIndex(new11, input42);
    const almostfinal11 = new11.substring(firstIndex11);
    window.final11 = almostfinal11;
    //alert(window.final11);
    //window.final11 = getSubstring(almostfinal11, start - 1, almostfinal11.length - finish - 1)

    const lastindex21 = findLastIndex(input21, finalfp);
    const new21 = input21.substring(0, lastindex21 + finalfp.length);
    const firstIndex21 = findFirstIndex(new21, input42);
    const almostfinal21 = new21.substring(firstIndex21);
    window.final21 = almostfinal21;
    //alert(window.final21);
    //window.final21 = getSubstring(almostfinal21, start - 1, almostfinal21.length - finish - 1)

    const lastindex31 = findLastIndex(input31, finalfp);
    const new31 = input31.substring(0, lastindex31 + finalfp.length);
    const firstIndex31 = findFirstIndex(new31, input42);
    const almostfinal31 = new31.substring(firstIndex31);
    window.final31 = almostfinal31;
    //alert(window.final31);
    //window.final31 = getSubstring(almostfinal31, start - 1, almostfinal31.length - finish - 1)
}

function cutstrselection(selectedOption) {
    if (selectedOption === "") {
        alert("Επιλέξτε περιοριστική ενδονουκλεάση.");
        return;
    }
    if (selectedOption === "BamH I") {
        window.cutstring = "GGATCC";
        window.cutat = 0;
    } else if (selectedOption === "EcoR I") {
        window.cutstring = "GAATTC";
        window.cutat = 0;
    } else if (selectedOption === "Hae III") {
        window.cutstring = "GGCC";
        window.cutat = 1;
    } else if (selectedOption === "Hha I") {
        window.cutstring = "GAAC";
        window.cutat = 0;
    } else if (selectedOption === "Hind III") {
        window.cutstring = "AAGCTT";
        window.cutat = 0;
    }
}

function cutting(finalstr, cutstr, cutat) {
    var indices01 = [];
    var index = finalstr.indexOf(cutstr);
    var start = -cutstring.length;
    var temp = start - 1;
    var count = 0

    while (index !== -1) {
        start = index - temp - cutstr.length - 1;
        temp = index;
        indices01.push(start + 1);
        index = finalstr.indexOf(cutstr, index + 1);
        count++;
    }
    indices01.push(finalstr.length - temp - cutstr.length)
    indices01[0] = finalstr.indexOf(cutstr, 0) - cutstr.length + cutat + 1;
    if (count == 1) indices01[1] += 2;
    for (var i = 0; i < count; i++) {
        indices01[i] += cutstr.length;
    }
    if (count !== 1) indices01[count] += cutstr.length - cutat - 1;
    //if (count == 0) indices01 = []; indices01[0] = finalstr.length;
    return indices01;
}

function actuallyupdate() {
    cutstrselection(document.getElementById("cutstrSelect").value);
    indices1 = cutting(final11, cutstring, window.cutat);
    indices2 = cutting(final21, cutstring, window.cutat);
    indices3 = cutting(final31, cutstring, window.cutat);
    //alert(indices1)

    initializeTable();
    var selectedOption = document.getElementById("scaleselection").value;

    if (selectedOption === "") {
        alert("Επιλέξτε μάρτυρα μοριακού βάρους.");
        return;
    } else {
        var scaleinput0 = 10;
        var scaleinput1 = 20;
        var scaleinput2 = 35;
        var scaleinput3 = 50;

        //removed
        var input11 = document.getElementById("input11").value;
        var input21 = document.getElementById("input21").value;
        var input31 = document.getElementById("input31").value;
        var input41 = document.getElementById("input41").value;
        var input42 = document.getElementById("input42").value;

        var validChars = /^[ATGC]+$/;

        if (!validChars.test(input11)) {
            alert("Εισάγετε έγκυρη αλληλουχία.");
            return;
        }
        if (!validChars.test(input21)) {
            alert("Εισάγετε έγκυρη αλληλουχία.");
            return;
        }
        if (!validChars.test(input31)) {
            alert("Εισάγετε έγκυρη αλληλουχία.");
            return;
        }
        /*      var input1 = Math.floor(input11.length / coefficient);
                var input2 = Math.floor(input21.length / coefficient);
                var input3 = Math.floor(input31.length / coefficient);
                var input4 = Math.floor(input41.length / coefficient);
        */
        var scaleCells = document.querySelectorAll(".black");

        for (var i = 0; i < scaleCells.length; i++) {
            var k = 4;
            if (i + 1 == scaleinput0) {
                scaleCells[199 - i * k - 3].classList.remove("black");
                scaleCells[199 - i * k - 3].classList.add("white");
                scaleCells[199 - i * k - 3].textContent = window.in1 + " bp";
            } else if (i + 1 == scaleinput1) {
                scaleCells[199 - i * k - 3].classList.remove("black");
                scaleCells[199 - i * k - 3].classList.add("white");
                scaleCells[199 - i * k - 3].textContent = window.in2 + " bp";
            } else if (i + 1 == scaleinput2) {
                scaleCells[199 - i * k - 3].classList.remove("black");
                scaleCells[199 - i * k - 3].classList.add("white");
                scaleCells[199 - i * k - 3].textContent = window.in3 + " bp";
            } else if (i + 1 == scaleinput3) {
                scaleCells[199 - i * k - 3].classList.remove("black");
                scaleCells[199 - i * k - 3].classList.add("white");
                scaleCells[199 - i * k - 3].textContent = window.in4 + " bp";
            } else if (i + 1 == 1) {
                scaleCells[199 - i * k - 3].classList.remove("black");
                scaleCells[199 - i * k - 3].classList.add("white");
                scaleCells[199 - i * k - 3].textContent = 0 + " bp";
            }
        }
        for (var i = 0; i < scaleCells.length; i++) {
            for (var j = 0; j <= indices1.length; j++) {
                var k = 4;
                if (i + 1 == Math.floor(indices1[j] * coefficient)) {
                    scaleCells[199 - i * k - 10].classList.remove("black");
                    scaleCells[199 - i * k - 10].classList.add("white");
                    scaleCells[199 - i * k - 10].textContent = indices1[j] + " bp";
                } else if (i + 1 == Math.floor((input41.length + input42.length) / 2 * coefficient + 1)) {
                    scaleCells[199 - i * k - 10].classList.remove("black");
                    scaleCells[199 - i * k - 10].classList.add("gray");
                    scaleCells[199 - i * k - 10].textContent = "Primers";
                }
            }
        }
        for (var i = 0; i < scaleCells.length; i++) {
            for (var j = 0; j <= indices2.length; j++) {
                var k = 4;
                if (i + 1 == Math.floor(indices2[j] * coefficient)) {
                    scaleCells[199 - i * k - 9].classList.remove("black");
                    scaleCells[199 - i * k - 9].classList.add("white");
                    scaleCells[199 - i * k - 9].textContent = indices2[j] + " bp";
                } else if (i + 1 == Math.floor((input41.length + input42.length) / 2 * coefficient + 1)) {
                    scaleCells[199 - i * k - 9].classList.remove("black");
                    scaleCells[199 - i * k - 9].classList.add("gray");
                    scaleCells[199 - i * k - 9].textContent = "Primers";
                }
            }
        }
        for (var i = 0; i < scaleCells.length; i++) {
            for (var j = 0; j <= indices1.length; j++) {
                var k = 4;
                if (i + 1 == Math.floor(indices1[j] * coefficient)) {
                    scaleCells[199 - i * k - 8].classList.remove("black");
                    scaleCells[199 - i * k - 8].classList.add("white");
                    scaleCells[199 - i * k - 8].textContent = indices1[j] + " bp";
                } else if (i + 1 == Math.floor((input41.length + input42.length) / 2 * coefficient + 1)) {
                    scaleCells[199 - i * k - 8].classList.remove("black");
                    scaleCells[199 - i * k - 8].classList.add("gray");
                    scaleCells[199 - i * k - 8].textContent = "Primers";
                }
            }
        }
    }
}

function updateTable() {
    finalseqs();
    actuallyupdate();
}

function target(inputSequence){
    result = "";
    for (var i = 0; i < inputSequence.length; i++) {
        var currentBase = inputSequence[i];
            if (currentBase === "A") {
                result += "T";
            } else if (currentBase === "T") {
                result += "A";
            } else if (currentBase === "C") {
                result += "G";
            } else if (currentBase === "G") {
                result += "C";
            }
        }
        return result
    }

function createtext() {
    var sep = "\n---------------------------------------------------";
    var name = "********************* PCR-311 *********************"
    var scale = "\n-Μάρτυρας Μοριακού βάρους:\n" + document.getElementById("scaleselection").value;
    var seq1 = "\n-1η Αλληλουχία DNA\n--Πρώτος Κλώνος:\n" + document.getElementById("input11").value + "\n--Δεύτερος Κλώνος:\n" + document.getElementById("input12").value + "\n-Target molecule:\n--1ος Κλώνος:\n" + final11 + "\n--2ος Κλώνος:\n" + target(final11);
    var seq2 = "\n-2η Αλληλουχία DNA\n--Πρώτος Κλώνος:\n" + document.getElementById("input21").value + "\n--Δεύτερος Κλώνος:\n" + document.getElementById("input22").value + "\n-Target molecule:\n--1ος Κλώνος:\n" + final21 + "\n--2ος Κλώνος:\n" + target(final21);
    var seq3 = "\n-3η Αλληλουχία DNA\n--Πρώτος Κλώνος:\n" + document.getElementById("input31").value + "\n--Δεύτερος Κλώνος:\n" + document.getElementById("input32").value + "\n-Target molecule:\n--1ος Κλώνος:\n" + final31 + "\n--2ος Κλώνος:\n" + target(final31);
    var cutstr = "\nΕνδονουκλεάση:\n" + document.getElementById("cutstrSelect").value;
    fprimer = "\nForward Primer:\n" + document.getElementById("input41").value;
    rprimer = "\nReverse Primer:\n" + document.getElementById("input42").value;
    text = name + sep + scale + sep + seq1 + sep + seq2 + sep + seq3 + sep + fprimer + sep + rprimer + sep + cutstr + sep + "\n" + name;
    return text;
}

function exportel() {
    var text = createtext();
    const customType = "application/x-mydata";
    const blob = new Blob([text], { type: customType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pcr-results" + ".g311sjj";
    a.click();
    URL.revokeObjectURL(url);
}

function importel() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.g311sjj';
    fileInput.onchange = function (event) {
        const file = event.target.files[0];
        if (!file) {
            alert('No file selected.');
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            const importedText = e.target.result;
            var data = importedText.split("\n");
            var nameIndex = data.indexOf("********************* PCR-311 *********************");
            var scaleIndex = data.indexOf("-Μάρτυρας Μοριακού βάρους:");
            var seq1Index = data.indexOf("-1η Αλληλουχία DNA");
            var seq2Index = data.indexOf("-2η Αλληλουχία DNA");
            var seq3Index = data.indexOf("-3η Αλληλουχία DNA");
            var fprimerIndex = data.indexOf("Forward Primer:");
            var rprimerIndex = data.indexOf("Reverse Primer:");
            var cutstrIndex = data.indexOf("Ενδονουκλεάση:");

            var scale = data[scaleIndex + 1];
            var in11 = data[seq1Index + 2];
            var in12 = data[seq1Index + 4];
            var in21 = data[seq2Index + 2];
            var in22 = data[seq2Index + 4];
            var in31 = data[seq3Index + 2];
            var in32 = data[seq3Index + 4];
            var in41 = data[fprimerIndex + 1];
            var in42 = data[rprimerIndex + 1];
            var cutstr = data[cutstrIndex + 1];
            window.cutstring = cutstr;

            document.getElementById('scaleselection').value = scale;
            document.getElementById('input11').value = in11;
            document.getElementById('input12').value = in12;
            document.getElementById('input21').value = in21;
            document.getElementById('input22').value = in22;
            document.getElementById('input31').value = in31;
            document.getElementById('input32').value = in32;
            document.getElementById('input41').value = in41;
            document.getElementById('input42').value = in42;
            document.getElementById('cutstrSelect').value = cutstr;
            //start
            function getSubstring(str, start, end) {
                return str.substring(start, end);
            }

            const input41 = in41;
            const start = in41.length;
            const input42 = in42;
            const finish = in42.length;
            const finalfp = reverseComplement(in41);
            function findLastIndex(str, substr) { return str.lastIndexOf(substr); }
            function findFirstIndex(str, primer) { return str.indexOf(primer); }

            const input11 = in11;
            const input21 = in21;
            const input31 = in31;

            const lastindex11 = findLastIndex(input11, finalfp);
            const new11 = input11.substring(0, lastindex11 + finalfp.length);
            const firstIndex11 = findFirstIndex(new11, input42);
            const almostfinal11 = new11.substring(firstIndex11);
            window.final11 = almostfinal11;
            //window.final11 = getSubstring(almostfinal11, start - 1, almostfinal11.length - finish - 1)

            const lastindex21 = findLastIndex(input21, finalfp);
            const new21 = input21.substring(0, lastindex21 + finalfp.length);
            const firstIndex21 = findFirstIndex(new21, input42);
            const almostfinal21 = new21.substring(firstIndex21);
            window.final21 = almostfinal21;
            //window.final21 = getSubstring(almostfinal21, start - 1, almostfinal21.length - finish - 1)

            const lastindex31 = findLastIndex(input31, finalfp);
            const new31 = input31.substring(0, lastindex31 + finalfp.length);
            const firstIndex31 = findFirstIndex(new31, input42);
            const almostfinal31 = new31.substring(firstIndex31);
            window.final31 = almostfinal31;
            //window.final31 = getSubstring(almostfinal31, start - 1, almostfinal31.length - finish - 1)


            cutstrselection(cutstr);
            //alert(window.cutstring);
            indices1 = cutting(final11, window.cutstring, window.cutat); //ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
            indices2 = cutting(final21, window.cutstring, window.cutat);
            indices3 = cutting(final31, window.cutstring, window.cutat);
            //alert(indices1)

            initializeTable();

            testScale(scale);

            if (selectedOption === "") {
                alert("Επιλέξτε μάρτυρα μοριακού βάρους.");
                return;
            } else {
                var scaleinput0 = 10;
                var scaleinput1 = 20;
                var scaleinput2 = 35;
                var scaleinput3 = 50;

                var validChars = /^[ATGC]+$/;

                if (!validChars.test(input11)) {
                    alert("Εισάγετε έγκυρη αλληλουχία.");
                    return;
                }
                if (!validChars.test(input21)) {
                    alert("Εισάγετε έγκυρη αλληλουχία.");
                    return;
                }
                if (!validChars.test(input31)) {
                    alert("Εισάγετε έγκυρη αλληλουχία.");
                    return;
                }
                /*      var input1 = Math.floor(input11.length / coefficient);
                        var input2 = Math.floor(input21.length / coefficient);
                        var input3 = Math.floor(input31.length / coefficient);
                        var input4 = Math.floor(input41.length / coefficient);
                */
                var scaleCells = document.querySelectorAll(".black");

                for (var i = 0; i < scaleCells.length; i++) {
                    var k = 4;
                    if (i + 1 == scaleinput0) {
                        scaleCells[199 - i * k - 3].classList.remove("black");
                        scaleCells[199 - i * k - 3].classList.add("white");
                        scaleCells[199 - i * k - 3].textContent = window.in1 + " bp";
                    } else if (i + 1 == scaleinput1) {
                        scaleCells[199 - i * k - 3].classList.remove("black");
                        scaleCells[199 - i * k - 3].classList.add("white");
                        scaleCells[199 - i * k - 3].textContent = window.in2 + " bp";
                    } else if (i + 1 == scaleinput2) {
                        scaleCells[199 - i * k - 3].classList.remove("black");
                        scaleCells[199 - i * k - 3].classList.add("white");
                        scaleCells[199 - i * k - 3].textContent = window.in3 + " bp";
                    } else if (i + 1 == scaleinput3) {
                        scaleCells[199 - i * k - 3].classList.remove("black");
                        scaleCells[199 - i * k - 3].classList.add("white");
                        scaleCells[199 - i * k - 3].textContent = window.in4 + " bp";
                    } else if (i + 1 == 1) {
                        scaleCells[199 - i * k - 3].classList.remove("black");
                        scaleCells[199 - i * k - 3].classList.add("white");
                        scaleCells[199 - i * k - 3].textContent = 0 + " bp";
                    }
                }
                for (var i = 0; i < scaleCells.length; i++) {
                    for (var j = 0; j <= indices1.length; j++) {
                        var k = 4;
                        if (i + 1 == Math.floor(indices1[j] * coefficient)) {
                            scaleCells[199 - i * k - 10].classList.remove("black");
                            scaleCells[199 - i * k - 10].classList.add("white");
                            scaleCells[199 - i * k - 10].textContent = indices1[j] + " bp";
                        } else if (i + 1 == Math.floor((input41.length + input42.length) / 2 * coefficient + 1)) {
                            scaleCells[199 - i * k - 10].classList.remove("black");
                            scaleCells[199 - i * k - 10].classList.add("gray");
                            scaleCells[199 - i * k - 10].textContent = "Primers";
                        }
                    }
                }
                for (var i = 0; i < scaleCells.length; i++) {
                    for (var j = 0; j <= indices2.length; j++) {
                        var k = 4;
                        if (i + 1 == Math.floor(indices2[j] * coefficient)) {
                            scaleCells[199 - i * k - 9].classList.remove("black");
                            scaleCells[199 - i * k - 9].classList.add("white");
                            scaleCells[199 - i * k - 9].textContent = indices2[j] + " bp";
                        } else if (i + 1 == Math.floor((input41.length + input42.length) / 2 * coefficient + 1)) {
                            scaleCells[199 - i * k - 9].classList.remove("black");
                            scaleCells[199 - i * k - 9].classList.add("gray");
                            scaleCells[199 - i * k - 9].textContent = "Primers";
                        }
                    }
                }
                for (var i = 0; i < scaleCells.length; i++) {
                    for (var j = 0; j <= indices1.length; j++) {
                        var k = 4;
                        if (i + 1 == Math.floor(indices1[j] * coefficient)) {
                            scaleCells[199 - i * k - 8].classList.remove("black");
                            scaleCells[199 - i * k - 8].classList.add("white");
                            scaleCells[199 - i * k - 8].textContent = indices1[j] + " bp";
                        } else if (i + 1 == Math.floor((input41.length + input42.length) / 2 * coefficient + 1)) {
                            scaleCells[199 - i * k - 8].classList.remove("black");
                            scaleCells[199 - i * k - 8].classList.add("gray");
                            scaleCells[199 - i * k - 8].textContent = "Primers";
                        }
                    }
                }
            }
            //end
        };
        reader.readAsText(file);
    };
    fileInput.click();
}

document.getElementById('exportBtn').addEventListener('click', exportTable);

//Credits_Open

var modal = document.getElementById("myModal");
var btn = document.getElementById("maiBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
modal.style.display = "block";
}
span.onclick = function() {
modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

function credtiss(){
    alert("1ο Πρότυπο ΓΕΛ Χαλκίδας\n• Γιώτας Ορφέας-Δημήτριος\n• Σκιάς Αντώνιος-Μιχαήλ\nΣχολικό έτος: 2023-2024")
}

function length(){
    var length = prompt("Εισάγετε έναν κλώνο της αλληλουχίας DNA:");
    alert("Μήκος μονόκλωνης αλληλουχίας: " + length.length + " bp.")
}

function complete(){
    var complete =  prompt("Εισάγετε έναν κλώνο της αλληλουχίας DNA:");
    const complement = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };
    final = complete.split('').map(n => complement[n]).join('');
    alert("Δεύτερος Κλώνος:\n" + final)
}

function defaultfile(){
    var sep = "\n---------------------------------------------------";
    var name = "********************* PCR-311 *********************"
    var scale = "\n-Μάρτυρας Μοριακού βάρους:\n" + "\"4-8-14-20\", \"10-20-35-50\", \"20-40-70-100\", \"200-400-700-1000\", \"400-800-1400-2000\", \"600-1200-2100-3000\"";
    var seq1 = "\n-1η Αλληλουχία DNA\n--Πρώτος Κλώνος:\n" + "<Αλληλουχία>" + "\n--Δεύτερος Κλώνος:\n" + "<Αλληλουχία>" + "\n-Target molecule:\n--1ος Κλώνος:\n" + "<Κενό>" + "\n--2ος Κλώνος:\n" + "<Κενό>";
    var seq2 = "\n-2η Αλληλουχία DNA\n--Πρώτος Κλώνος:\n" + "<Αλληλουχία>" + "\n--Δεύτερος Κλώνος:\n" + "<Αλληλουχία>" + "\n-Target molecule:\n--1ος Κλώνος:\n" + "<Κενό>" + "\n--2ος Κλώνος:\n" + "<Κενό>";
    var seq3 = "\n-3η Αλληλουχία DNA\n--Πρώτος Κλώνος:\n" + "<Αλληλουχία>" + "\n--Δεύτερος Κλώνος:\n" + "<Αλληλουχία>" + "\n-Target molecule:\n--1ος Κλώνος:\n" + "<Κενό>" + "\n--2ος Κλώνος:\n" + "<Κενό>";
    var cutstr = "\nΕνδονουκλεάση:\n" + "\"BamH I\", \"EcoR I\", \"Hae III\", \"Hha I\", \"Hind III\"";
    fprimer = "\nForward Primer:\n" + "<Αλληλουχία>";
    rprimer = "\nReverse Primer:\n" + "<Αλληλουχία>";
    text = name + sep + scale + sep + seq1 + sep + seq2 + sep + seq3 + sep + fprimer + sep + rprimer + sep + cutstr + sep + "\n" + name;
    const customType = "application/x-mydata";
    const blob = new Blob([text], { type: customType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "filename" + ".g311sjj";
    a.click();
    URL.revokeObjectURL(url);
}
//Credits_Close

/*
AAAAG GATCCAAAAAG GATCCAAAAAAG GATCCAAA
AAAAACGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGATCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATTACAAAAA
GTAA, CGA, BamH I
*/