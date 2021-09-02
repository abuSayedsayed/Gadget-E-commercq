window.onload = function () {
	goToTop()
	expandNav()
}
window.onscroll = function () {
	goToTop()
}

// Function for go to top  btn
function goToTop() {
	const goToTopBtn = document.getElementById('go-to-top-btn')
	if (window.scrollY > 300) {
		goToTopBtn.style.pointerEvents = 'all'
		goToTopBtn.style.opacity = '1'
		handleClickOnTopBtn(goToTopBtn)
	} else if (window.scrollY < 300) {
		goToTopBtn.style.pointerEvents = 'none'
		goToTopBtn.style.opacity = '0'
	}
}
// Function for handling the click
function handleClickOnTopBtn(goToTopBtn) {
	goToTopBtn.addEventListener('click', function () {
		window.scrollTo({ top: 0, left: 0 })
	})
}

// Function For Handling the navbar
function expandNav() {
	const hamburger=document.getElementById('hamburger')
	const nvaBar=document.querySelector('#navbar')
	const navMenu=document.querySelector('.navmenu')
	let   isExpand=false
	hamburger.addEventListener('click',function(){
		if(!isExpand){
			nvaBar.style.left='0%'
			navMenu.style.width='80vw'
			isExpand=true
		}else{
			
			nvaBar.style.left='-100%'
			navMenu.style.width='0vw'
			isExpand=false
		}

	})
	
}