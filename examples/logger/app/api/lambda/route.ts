import { AxiomRequest, withAxiom } from 'next-axiom/withAxiom';

export const runtime = 'edge';

export const GET = withAxiom(async (req: AxiomRequest) => {
  req.log.info('axiom lambda route');
  return new Response('Hello, Next.js!');
});
