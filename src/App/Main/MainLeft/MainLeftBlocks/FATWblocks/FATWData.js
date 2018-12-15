const FATWData = [
    {   id:1,
        headline:"Lorem ipsum 1",
        image:"/images/FATW-image/1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor111",
    },
    {   id:2,
        headline:"Lorem ipsum 2",
        image:"/images/FATW-image/2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor222",
    },
    {   id:3,
        headline:"Lorem ipsum 3",
        image:"/images/FATW-image/3.jpg",
        text: "Lorem ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor333",
    }
]
export const getFATWMap = (array) => {
    return  array.reduce((map,FATW)=>({
        ...map,
        [FATW.id]:FATW,
    }),{})
} 
export default FATWData