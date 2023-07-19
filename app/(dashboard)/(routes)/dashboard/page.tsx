import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
	return (
		<div>
			<p className='text-6xl text-green-500'>Hello AI</p>
			<Button size='lg'>Click Me</Button>
		</div>
	);
}
