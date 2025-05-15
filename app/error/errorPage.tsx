import { Link } from "react-router";

type ErrorInfo = {
    status: number;
    message: string;
}

type ErrorDictionary = {
    [key: number]: ErrorInfo;
}

const error: ErrorDictionary = {
  400: { status: 400, message: 'Bad request' },
  401: { status: 401, message: 'Unauthorized' },
  403: { status: 403, message: 'Forbidden' },
  404: { status: 404, message: 'Resource not found' },
  405: { status: 405, message: 'Method not allowed' },
  408: { status: 408, message: 'Request timeout' },
  413: { status: 413, message: 'Payload too large' },
  414: { status: 414, message: 'Request URI too large' },
  415: { status: 415, message: 'Unsupported media type' },
  426: { status: 426, message: 'HTTP request was sent to HTTPS port' },
  429: { status: 429, message: 'API rate limit exceeded' },
  495: { status: 495, message: 'Client certificate authentication error' },
  496: { status: 496, message: 'Client certificate not presented' },
  497: { status: 497, message: 'HTTP request was sent to mutual TLS port' },
  500: { status: 500, message: 'Server error' },
  501: { status: 501, message: 'Not implemented' },
  502: { status: 502, message: 'Bad gateway' },
};

interface ErrorPageProps {
    statusCode?: number;
}

export function ErrorPage({ statusCode = 404 }: ErrorPageProps) {
    
  const errorInfo = error[statusCode] || error[404];

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            {errorInfo.status}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            {errorInfo.message}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we can't find that page. You'll find lots to explore on the home
            page.{" "}
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}