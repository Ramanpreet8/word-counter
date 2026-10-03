const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const charCountDisplay = document.getElementById('charCount');
const sentenceCountDisplay = document.getElementById('sentenceCount');
const paragraphCountDisplay = document.getElementById('paragraphCount');
const copyBtn = document.getElementById('copyBtn');

// 1. Listen for user input in real-time
textInput.addEventListener('input', updateStatistics);

// 2. The Core Counting Logic
function updateStatistics() {
    const text = textInput.value;

    // Character Count (includes spaces)
    charCountDisplay.textContent = text.length;

    // Word Count
    const words = text.match(/\S+/g) || [];
    wordCountDisplay.textContent = words.length;

    // Sentence Count
    const sentences = text.split(/[.!?]+(?=\s|$)/).filter(sentence => sentence.trim().length > 0);
    sentenceCountDisplay.textContent = sentences.length;

    // Paragraph Count
    const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
    paragraphCountDisplay.textContent = paragraphs.length;
}

// 3. Copy functionality
function copyText() {
    if (!textInput.value) return;
    
    textInput.select();
    document.execCommand('copy');
    
    // Provide visual feedback
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = 'Copy Text';
    }, 1500);
}

// 4. Clear functionality
function clearText() {
    textInput.value = '';
    updateStatistics(); // Reset counts to zero
}