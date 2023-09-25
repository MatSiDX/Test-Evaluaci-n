function createMatrix(matrixId, rowsId, colsId) {
    const rows = parseInt(document.getElementById(rowsId).value);
    const cols = parseInt(document.getElementById(colsId).value);
  
    let matrixHTML = `<h3>Matriz ${matrixId}:</h3><table>`;
    for (let i = 0; i < rows; i++) {
      matrixHTML += "<tr>";
      for (let j = 0; j < cols; j++) {
        matrixHTML += `<td><input type="number" class="matrix-input" id="${matrixId}_${i}_${j}"></td>`;
      }
      matrixHTML += "</tr>";
    }
    matrixHTML += "</table>";
    document.getElementById(matrixId + "Input").innerHTML = matrixHTML;
  }
  
  function getMatrixValues(matrixId, rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const cellValue = parseFloat(document.getElementById(`${matrixId}_${i}_${j}`).value);
        row.push(cellValue);
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  function displayResult(resultMatrix) {
    let resultHTML = "<h3>Resultado:</h3><table>";
    for (let i = 0; i < resultMatrix.length; i++) {
      resultHTML += "<tr>";
      for (let j = 0; j < resultMatrix[0].length; j++) {
        resultHTML += `<td>${resultMatrix[i][j]}</td>`;
      }
      resultHTML += "</tr>";
    }
    resultHTML += "</table>";
    document.getElementById("result").innerHTML = resultHTML;
  }
  
  function addMatrices() {
    const matrixA = getMatrixValues("matrixA", parseInt(document.getElementById("rowsA").value), parseInt(document.getElementById("colsA").value));
    const matrixB = getMatrixValues("matrixB", parseInt(document.getElementById("rowsB").value), parseInt(document.getElementById("colsB").value));
  
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      alert("Las matrices deben tener las mismas dimensiones para la suma.");
      return;
    }
  
    const resultMatrix = matrixA.map((row, i) => row.map((cell, j) => cell + matrixB[i][j]));
    displayResult(resultMatrix);
  }
  
  function multiplyMatrices() {
    const matrixA = getMatrixValues("matrixA", parseInt(document.getElementById("rowsA").value), parseInt(document.getElementById("colsA").value));
    const matrixB = getMatrixValues("matrixB", parseInt(document.getElementById("rowsB").value), parseInt(document.getElementById("colsB").value));
  
    if (matrixA[0].length !== matrixB.length) {
      alert("El número de columnas de la matriz A debe ser igual al número de filas de la matriz B para la multiplicación.");
      return;
    }
  
    const resultMatrix = [];
    for (let i = 0; i < matrixA.length; i++) {
      const row = [];
      for (let j = 0; j < matrixB[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrixA[0].length; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        row.push(sum);
      }
      resultMatrix.push(row);
    }
  
    displayResult(resultMatrix);
  }