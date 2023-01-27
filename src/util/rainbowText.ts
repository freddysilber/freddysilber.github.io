// export function rainbowText() {
// 	let angle = 0
// 	const p: HTMLParagraphElement | null = document.querySelector('.header')
// 	const text = p.textContent.split('')
// 	const len = text.length
// 	const phaseJump = 360 / len
// 	p.innerHTML = text.map(char => `<span>${char}</span>`).join('')
// 	const spans = p.children;
// 	(function weee() {
// 		for (let i = 0; i < len; i++) {
// 			spans[i].style.color = `hsl(${(angle + Math.floor(i * phaseJump))},55%, 70%)`
// 		}
// 		angle++
// 		requestAnimationFrame(weee)
// 	})()
// }
