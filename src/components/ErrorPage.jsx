import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>NoaPay | 404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist on NoaPay." />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center bg-base-200 text-center p-6">
        <section className="max-w-lg">
          <h1 className="text-7xl font-extrabold text-error">404</h1>
          <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
          <p className="mt-3 text-base-content/80">
            Sorry, the page you’re looking for doesn’t exist, has been moved,
            or the URL might be incorrect.
          </p>
          <Link
            to="/"
            className="btn btn-success mt-6 text-white px-6 py-2 rounded-lg shadow-md transition hover:brightness-110"
          >
            Return to Homepage
          </Link>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
