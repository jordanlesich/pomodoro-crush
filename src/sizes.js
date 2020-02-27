export default {
    up(size){
        const sizes = {
            sm: "575.98px",
            md: "767.98px",
            lg: "991.98px",
            xl: "1280.98px",
        }
        return `@media (min-width: ${sizes[size]})`
    }
}