export default {
    up(size){
        const sizes = {
            sm: "575.98px",
            md: "767.98px",
            lg: "1080.98px",
            xl: "1280.98px",
        }
        return `@media (min-width: ${sizes[size]})`
    },
    vertical(size){
        const sizes = {
            sm: "600.98px",
            md: "650.98px",
            lg: "750.98px",
            xl: "1100.98px",
        }
        return `@media (min-height: ${sizes[size]})`
    }
}