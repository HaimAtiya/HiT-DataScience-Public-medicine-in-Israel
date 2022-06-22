pages=[
    "01-Problem definition and research question.html", 
    "02-Crawling.html",
    "03-Data analysis and optimization.html",
    "04-EDA and Visualization.html",
    "05-Machine Lerning & Conclusions.html"
]

function resizeIframe(obj) {
    obj.style.height = 0;
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

function switchPage(page){
    document.getElementsByTagName("iframe")[0].src = pages[page-1]
}
