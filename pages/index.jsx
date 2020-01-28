import Link from "next/link";
import axios from "axios";

function HomePage(props) {
  return (
    <div>
      <h1>Binance Articles</h1>
      {props.pages.map(page => (
        <div>
          <Link href='/page' as={page.slug}>
            {page.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

HomePage.getInitialProps = async () => {
  const res = await axios.get("https://binance-api-example.herokuapp.com/");
  return { pages: res.data };
};

export default HomePage;
