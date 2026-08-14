import { Image } from '@/components/ui/image';

const LOGO_URL =
  'https://media.base44.com/images/public/6a74b8a91e53f9198f1d94fb/6ed74f498_14BE2CFE-B2E9-4035-B594-1EDE9A6F4105.png';

export default function Logo({ className = 'h-9' }) {
  return (
    <Image
      src={LOGO_URL}
      alt="HALVOR — Built with Purpose"
      fittingType="fit"
      originWidth={1200}
      originHeight={400}
      className={className}
    />
  );
}