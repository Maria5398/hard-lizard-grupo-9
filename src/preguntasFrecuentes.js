const fs = require('fs');

let faqsParser = JSON.parse(fs.readFileSync('./data/faqs.json'));

let totalFaqs = faqsParser.total_faqs;
let onFaqs = faqsParser.faqs;

let faqsList = onFaqs.map(faq => `Listado de Preguntas: ${faq.faq_title}\n\n${faq.faq_answer}`);

let faqs = `***** Preguntas Frecuentes *****\n\nTotal de preguntas: ${totalFaqs}\n\n`;
faqs += faqsList;

module.exports = faqs;