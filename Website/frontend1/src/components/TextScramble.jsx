import React from "react";
import "../assets/css/scrambleText.css";
class TextScramble extends React.Component {
  constructor(props) {
    super(props);
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.props.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end,
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }

        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.props.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  componentDidMount() {
    const el = document.querySelector(".text-scramble");
    const fx = new TextScramble(el);
    let flag = true;
    function next() {
      //       console.log(el.innerHTML);
      fx.setText(el.innerHTML).then(() => {});
    }
    next();
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      if (window.scrollY > 890 && flag) {
        next();
        flag = false;
      }
      if (window.scrollY <= 325) {
        flag = true;
      }
    });
  }
  render() {
    // eslint-disable-next-line jsx-a11y/heading-has-content
    return <div className="text-scramble display-3">{this.props.text}</div>;
  }
}

export default TextScramble;
