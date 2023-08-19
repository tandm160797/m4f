import { type PropsWithChildren } from 'react';

import Providers from '@components/Providers';

const HomeLayout = ({ children }: PropsWithChildren) => (
	<html lang="en" suppressHydrationWarning>
		<head />
		<body>
			<Providers>{children}</Providers>
		</body>
	</html>
);

export default HomeLayout;
