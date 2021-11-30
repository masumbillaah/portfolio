import React from "react";

export default function Footer() {
  return (
    <div className="mt-5">
      <section class="m-100">
        <footer>
          <p class="text-light text-center mb-2">
            All rights reserved &copy; Masum Billah 2021 |
            <span class="text-info"> Web developer</span>
          </p>
        </footer>
      </section>
      <div
        className="social"
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        <a target="_black" href="https://www.facebook.com/masumbillaah1">
          <i className="fab fa-facebook-square "></i>
        </a>
        <a target="_black" href="https://www.linkedin.com/in/masumbillaah/">
          <i className="fab fa-linkedin "></i>
        </a>
        <a target="_black" href="https://twitter.com/masumbillaah">
          <i className="fab fa-twitter-square "></i>
        </a>
        <a target="_black" href="https://app.netlify.com/">
          <i className="fab fa-connectdevelop "></i>
        </a>
        <a target="_black" href="https://www.behance.net/masumbillaah">
          <i className="fab fa-behance-square "></i>
        </a>
        <a target="_black" href="https://github.com/masumbillaah">
          <i className="fab fa-github-square "></i>
        </a>
      </div>
    </div>
  );
}
