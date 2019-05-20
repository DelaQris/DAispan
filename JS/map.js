$(document).ready(function(){
	// Выделение районов              
		$('.district').click(
			function() {
				$('.description').html($(this).attr('description-data'));
				$('.description').fadeTo(1000, 1);
				$('.active_m').attr("class", "district");
				$(this).attr("class", "active_m");

				
				
			}
			
		);
		$('.district').click(
			function() {
				$('.description_m').html($(this).attr('description-data'));
				$('.description_m').fadeTo(1000, 1);
			}
			
		);
		$('.district_b').click(
			function() {
				$('.description').html($(this).attr('description-data'));
				$('.description').fadeTo(1000, 1);
				$('.active_m').attr("class", "district_b");
				$(this).attr("class", "active_m");

				
				
			}
			
		);
		$('.district_b').click(
			function() {
				$('.description_m').html($(this).attr('description-data'));
				$('.description_m').fadeTo(1000, 1);
			}
			
		);
// 	// Объединение Районов
// 		var f = $('#alt_emporda'),
// 		s = $('#alt_emporda_bot'),
// 		bai =$('#baix_emporda'),
// 		ba_b =$('#baix_emporda_bot'),
// 		fi =$('#la_selva'),
// 		si =$('#la_selva_bot');
		
//     f.hover(
//         function () {
//             s.css('opacity', '.5');
//             f.css('opacity', '.5');
//         },
//         function () {
//             s.css('opacity', '.33');
//             f.css('opacity', '.2');
//         }
//     );
//     s.hover(
//         function () {
//             s.css('opacity', '.5');
//             f.css('opacity', '.5');
//         },
//         function () {
//             s.css('opacity', '.33');
//             f.css('opacity', '.2');
//         }
// 	);
// 	// --------------------------------
// 	bai.hover(
//         function () {
//             ba_b.css('opacity', '.5');
//             bai.css('opacity', '.5');
//         },
//         function () {
//             ba_b.css('opacity', '.33');
//             bai.css('opacity', '.2');
//         }
//     );
//     ba_b.hover(
//         function () {
//             ba_b.css('opacity', '.5');
//             bai.css('opacity', '.5');
//         },
//         function () {
//             ba_b.css('opacity', '.33');
//             bai.css('opacity', '.2');
//         }
// 	);
// 	// --------------------------------
// 	fi.hover(
//         function () {
//             si.css('opacity', '.5');
//             fi.css('opacity', '.5');
//         },
//         function () {
//             si.css('opacity', '.33');
//             fi.css('opacity', '.2');
//         }
//     );
//     si.hover(
//         function () {
//             si.css('opacity', '.5');
//             fi.css('opacity', '.5');
//         },
//         function () {
//             si.css('opacity', '.33');
//             fi.css('opacity', '.2');
//         }
// 	);
// // ---------

});
		
		

