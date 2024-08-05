<script setup>
import { ref, onMounted } from "vue";
import { PDFDocument, rgb } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist/webpack";

const pdfUrl = "/public/pdfs/sample.pdf";
const canvasRef = ref(null);
let pdfDoc = null;
let pdfPage = null;

const loadPdf = async () => {
  const loadingTask = pdfjsLib.getDocument(pdfUrl);
  pdfDoc = await loadingTask.promise;
  pdfPage = await pdfDoc.getPage(1);
  renderPage(pdfPage);
};

const renderPage = async (page) => {
  const viewport = page.getViewport({ scale: 1 });
  const canvas = canvasRef.value;
  const context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
  };
  await page.render(renderContext).promise;
};

const addBlock = async () => {
  // Define the coordinates where you want to add the block
  const x = 100;
  const y = 100;
  const width = 500;
  const height = 850;

  // Load the PDF with pdf-lib
  const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(pdfBytes);

  // Get the first page
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a rectangle
  firstPage.drawRectangle({
    x: x,
    y: firstPage.getHeight() - y - height, // Convert to PDF coordinates
    width: width,
    height: height,
    borderColor: rgb(1, 0, 0),
    borderWidth: 2,
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytesModified = await pdfDoc.save();

  // For demonstration purposes, create a new blob and open it
  const blob = new Blob([pdfBytesModified], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  window.open(url);
};

onMounted(() => {
  loadPdf();
});
</script>

<template>
  <div>
    <canvas ref="pdfCanvas"></canvas>
    <button @click="addBlock">Add Block</button>
  </div>
</template>
