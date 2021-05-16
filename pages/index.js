import Link from "next/link";
import { getSortedPosts } from "@utils/posts";

export default function Home() {

  return (
    <div className="homeIndex">

      <div className="title-block">
        <span id="name-block">Vasanth Mohan</span>
        <br/>
        <span id="position-block">Application Developer</span>
        <br/>
        <span id="description-block">The best time solve a problem is during planning.<br/>The next best time is right now</span>
        <br/>
        <div className="button-block">
          <Link href="/posts">Blog</Link>
          <a href="https://vazark.gitlab.io/til/">Today I learned</a>
        </div>
      </div>
      <div className="modalBlock">
        <div className="footer">
          <span id="contact-button">Contact</span>
          {/* React Modal */}
          <div className="link-images">
            <a href="https://www.linkedin.com/in/vazm/">
              <img height="26" width="26" src="https://unpkg.com/simple-icons@v4/icons/linkedin.svg" />
            </a>
            <a href="https://www.twitter.com/vazarks">
              <img height="26" width="26" src="https://unpkg.com/simple-icons@v4/icons/twitter.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
