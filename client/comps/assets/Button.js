import { Button } from '@mui/material'
import { useRouter } from 'next/router';

const CategoryButton = () => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.push('/blog/news')}
      variant="contained"
      sx={{ p: 0, fontSize: 10, fontWeight: 400 }}
    >
      Category
    </Button>
  );
};

export default CategoryButton;
