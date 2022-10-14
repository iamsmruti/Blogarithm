import { Button } from '@mui/material'

const CategoryButton = () => {
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
