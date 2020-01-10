import React from 'react';

function TextSection() {
  return (
    <section id="text-section" className="section section-text">
      <div className="animate-up animated">
        <h2 className="section-title">Text Section</h2>
        <div className="section-box">
          <p>
            Hello! I’m Do Ngoc Huynh and this is custom editor section. You can
            add here any text or "Strikethrough" text and even you can add
            bulleted or numbered text and even you will be able to add blockquot
            text. You can align this text to left/right/center. One of the most
            interesting options is to divide this section to "One half" "One
            Third" and "One Fourth". You can use this for Honors or Achievments
            or Awards sections. You can insert images and photos right in this
            editor!
          </p>
        </div>
      </div>
    </section>
  );
}

export default TextSection;
