import { useAuthStore } from '@/store/authStore';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import { CardWrapper } from '../ui/CardWrapper/CardWrapper';

function Dashboard() {
  const zustandEmail = useAuthStore((store) => store.authData?.email);
  console.log('ProfileSettings ~ zustandEmail:', zustandEmail);
  return (
    <>
      <CardTitle>
        <h4>Dashboard</h4>
      </CardTitle>
      <CardWrapper>Body</CardWrapper>
    </>
  );
}

export default Dashboard;
