let expanded = false,
 toggled = false
document.querySelector('.header__menu').addEventListener('click', ({target}) => {
    expanded = !expanded
    if ( !toggled ) toggled = true

    target.ariaExpanded = String(expanded)
    target.querySelector('span').textContent = expanded ? 'Закрыть меню' : 'Открыть меню'
    document.querySelector('.header__links').className = 'header__links header__links-toggled ' + expanded ? 'header__links_opened' : ''
})