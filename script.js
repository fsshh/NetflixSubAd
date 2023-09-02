const profile_Icon = document.getElementById('profile_icon');
const opening_section = document.getElementById('opening_section');
const opening_items = document.querySelectorAll('.opening_items');
const home_Page = document.getElementById('home_page')

profile_Icon.addEventListener('click', () =>{
    opening_items.forEach(item =>{
        item.classList.add('open_icon_anim')
    })
    setTimeout(() =>{
        opening_section.classList.add('hide')
        home_Page.classList.remove('hide')
    }, 1000)
})

const desc_Card = document.querySelectorAll('.desc-card')
const svg_Item = document.querySelectorAll('.svg-item')
const pos_Indicator = document.querySelectorAll('.pos_indicator')

svg_Item.forEach(i =>{
    const getItemNum = i.getAttribute('data-item_num')
    i.addEventListener('click', () =>{
        desc_Card.forEach(desc_Item =>{
            if(desc_Item.classList.contains(`desc-item-${getItemNum}`)){
                desc_Item.classList.remove('hide-desc');
            }else{
                desc_Item.classList.add('hide-desc')
            }
            pos_Indicator.forEach(item =>{
                if(item.classList.contains(`pos_item-${getItemNum}`)){
                    item.classList.add('item_opacity_1');
                    item.classList.remove('item_opacity_0');
                }else{
                    item.classList.remove('item_opacity_1')
                    item.classList.add('item_opacity_0')
                }
            })
        })
    })
})