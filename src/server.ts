import app from './app';

app.listen(process.env.PORT || 4001, () => {
    console.log(`SERVER listening on port ${process.env.PORT}`);
});