# Lambda@Edge Example

Sample code for an AWS Lambda@Edge function triggered by Origin Requests from a connected AWS CloudFront distribution (CDN).

When triggered, the Lambda@Edge function checks the country code header of the HTTP request.

If the country code is AU, BR, EU, SG, or US the URI of the HTTP request is modified to point to a specific index.html object within an S3 bucket.

A default index.html object is served from the CDN if the country code is NOT one of the above five.

# Example Use Case
You have a website accessed by users from around the world. For users in the United States, you want CloudFront to serve a website with US market-specific information. The same is true for users in Australia, Brazil, Europe, or Singapore and each of their respective markets. For users in any country besides those mentioned above, you want CloudFront to serve a default website.

Stackery will be used to design, deploy, and operate this stack; but the Infrastructure as Code and Lambda@Edge concepts are valid with or without Stackery.

Check out this [link](https://aws.amazon.com/lambda/edge/ "Lambda@Edge") to explore many of the other use cases such as: A/B testing, user authentication and authorization, user prioritization, user tracking and analytics, website security and privacy, dynamic web application at the edge, search engine optimization (SEO), intelligently route cross origins and data centers, bot mitigation at the edge, improved user experience (via personalized content), and real-time image transformation.
