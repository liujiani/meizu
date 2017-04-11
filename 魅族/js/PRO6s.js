window.onload=function(){
	//头
	var oli = document.getElementById('tou').children;
			var tu = document.getElementById('hezi').children;
			for(var i = 1; i < 5; i++) {
				oli[i].index = i;
				oli[i].onmousemove = function() {
					$("#hezi").slideDown('30');
					for(var i = 1; i < 5; i++) {
						tu[i].style.animation = '';
						tu[i].style.display = 'none';
					}
					tu[this.index].style.display = 'block';
					tu[this.index].style.animation = '2s forwards ease 1 diyi';
				}
				$("#hezi").hover(function() {
					hezi.style.display = 'block';
				}, function() {
					hezi.style.display = 'none'
				})
			}
			var ddl = document.getElementById('dl')
			ddl.onmouseover = function(){
				this.style.background = '#fff';
				this.style.borderTop = '2px solid #007AFF';
				this.style.borderRight = '1px solid #ccc';
			}
			ddl.onmouseout = function(){
				this.style.background = '';
				this.style.borderTop = '';
				this.style.borderRight = '';
			}
			quan.onmouseover = function(){
				dt.style.display = 'block';
				ddl.style.background = '#fff';
				ddl.style.borderTop = '2px solid #007AFF';
				ddl.style.borderRight = '1px solid #ccc';
			}
			quan.onmouseout = function(){
				dt.style.display = 'none';
				ddl.style.background = '';
				ddl.style.borderTop = '';
				ddl.style.borderRight = '';
			}
	
	// 导航 开关
	var kkgg=true;
	$('#kg').click(function(){
		$('.drop').slideToggle(400);
		if(kkgg){
			$('.crl_nav').css('background','rgba(255, 255, 255, .85)')
			$('#kg').find('span:last-child').css('background','url(img/PRO6s/huan.png) no-repeat');
			kkgg=!kkgg
		}else{
			$('.crl_nav').css('background','')
			$('#kg').find('span:last-child').css('background','url(img/PRO6s/huan.png) no-repeat -13px 0');
			kkgg=!kkgg
		}
	})
	// animation
	setTimeout(function(){
		$('.light').find('.img_1').css({
			'transform':'translateY(0)','opacity':'1'
		})
		$('.light').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
		})
		$('.light').find('.desc p').css({
			'transform':'translateY(0px)',
			'opacity':'1'
		})
		$('.light').find('.img_2').css({
			'transform':'translateY(0)','opacity':'1'
		})
		$('.light').find('.img_3').css({
			'transform':'translateY(0)','opacity':'1'
		})
	})
	// 滚轮事件
			var top2 = $('.crl_nav').offset().top;
			$(window).scroll( function() {
				var top = document.body.scrollTop || document.documentElement.scrollTop
	//			console.log(top, top2)
				if(top>=top2){
					$('.crl_nav').css({
						'position':'fixed',
						'top':'0',
						'background':'rgba(255, 255, 255, 0.85098)'
					})
				}else{
					$('.crl_nav').css({
						'position':'absolute',
						'top':'0'
					})
				}
				$(window).scroll(function(){
					var top3 = document.body.scrollTop || document.documentElement.scrollTop
					if(top>top3){
						$('.crl_nav').css('top', '0px')
					}else if(top>150){
						$('.crl_nav').css('top', '-100px');
						$('.drop').css('display','none');
//						$('#kg').find('span:last-child').css('background','url(/img/PRO6s/huan.png) no-repeat -13px 0');
					}
				})
			});
	window.onscroll=function(){
		
		var crl_sTop=document.body.scrollTop || document.documentElement.scrollTop;
		console.log(crl_sTop)
		if(crl_sTop>=1500 && crl_sTop<=2684){
			$('.camera').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
			})
			$('.camera').find('.desc p').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.camera').find('.crl_more').css({
				'opacity':'1'
			})
			$('.camera').find('.scene img').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.features li').css({
				'transform':'translateX(0px)',
				'opacity':'1'
			})
		}else if(crl_sTop>=2912 && crl_sTop<=3810){
			$('.process').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
			})
			$('.process').find('.desc p').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.process').find('.crl_more').css({
				'opacity':'1'
			})
			$('.process').find('.img_1').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.process').find('.img_2').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.process').find('.img_3').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.process').find('.img_4').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
		}else if(crl_sTop>=4321 && crl_sTop<=5491){
			$('.battery').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
			})
			$('.battery').find('.desc p').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.battery').find('.img_1').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
		}else if(crl_sTop>=5291 && crl_sTop<=6390){
			$('.mpress').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
			})
			$('.mpress').find('.desc p').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.mpress').find('.crl_more').css({
				'opacity':'1'
			})
			$('.mpress').find('.img_1').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.mpress').find('.img_2').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.mpress').find('.img_3').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.mpress').find('.img_4').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.mpress').find('.img_5').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			
		}else if(crl_sTop>=6328 && crl_sTop<=7428){
		  $('.design').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
			})
			$('.design').find('.desc p').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.design').find('.crl_more').css({
				'opacity':'1'
			})
		}else if(crl_sTop>=7893 && crl_sTop<=8602){
		  $('.screen').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
			})
			$('.screen').find('.desc p').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.screen').find('.crl_more').css({
				'opacity':'1'
			})
			$('.screen').find('.img_1').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.screen').find('.img_2').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
			$('.screen').find('.img_3').css({
				'transform':'translate3d(0px,0px,0)','opacity':'1'
			})
		}else if(crl_sTop>=8780 && crl_sTop<=9582){
		  $('.flyme').find('.desc h1').css({
			'transform':'translateY(0px)',
			'opacity':'1'
			})
			$('.flyme').find('.desc p').css({
				'transform':'translateY(0px)',
				'opacity':'1'
			})
			$('.flyme').find('.crl_more').css({
				'opacity':'1'
			})
			
			$('.flyme').find('.crl_logo').css({
				'animation':'flymelogo 4s linear 3s 5',
				'opacity':'1',
				'transform':'translate3d(0px,0px,0)'
			})
			$('.flyme').find('.logo_text').css({
				'opacity':'1',
				'transform':'translate3d(0px,0px,0)'
			})
		}
	}
	
	//底部
	weix.onmouseover=function(){
		tuewm.style.display='block'
	}
	weix.onmouseout=function(){
		tuewm.style.display='none'
	}
}
