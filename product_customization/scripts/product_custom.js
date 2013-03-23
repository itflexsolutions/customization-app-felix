	// Front and Back
	
		$("#custom_back").unbind('click').click(function(e) {
			  e.preventDefault();
			  var title1 = $(this).attr("name");
			  imgmain.src="product_customization/images/products/" + title1 + ".jpg";
			  $(".front_stripe").css("display","none");		
			  $(".back_stripe").css("display","block");	
			   $(".front_logo").css("display","none");		
			  $(".back_logo").css("display","block");	
		});
        $("#custom_front").unbind('click').click(function(e) {
			  e.preventDefault();
			  var title1 = $(this).attr("name");
			  imgmain.src="product_customization/images/products/" + title1 + ".jpg";
			  $(".back_stripe").css("display","none");
			  $(".front_stripe").css("display","block");
			  $(".back_logo").css("display","none");		
			  $(".front_logo").css("display","block");	
		});
		
	// Color and Image
		$(".custom_other_images ul li a").unbind('click').click(function(e) {
			  e.preventDefault();
			  var title = $(this).attr("name");
			  //alert(title);
			  
			  if($(".back_stripe").css('display') == "block"){
			  	imgmain.src="product_customization/images/products/" + title + "_b.jpg";
			  }else{
			    imgmain.src="product_customization/images/products/" + title + ".jpg";
			  }
			  
			  if($(".back_logo").css('display') == "block"){
			  	imgmain.src="product_customization/images/products/" + title + "_b.jpg";
			  }else{
			    imgmain.src="product_customization/images/products/" + title + ".jpg";
			  }
			  
			  $("#custom_back").attr('name',title+'_b');
			  $("#custom_front").attr('name',title);
		});
		
	
	// Reflective Stripes
	
		//Dropdown plugin data
            var ddData = [
                {
                    text: 'Industrial Wash - 2" Silver FR 1J',
                    value: "IW21J",
                    imageSrc: "product_customization/images/reflective_stripes/IW21J.png"
                },
                {
                    text: 'Industrial Wash - 2" Ylw/Slver/Ylw FR 1B',
                    value: "IW21B",
                    imageSrc: "product_customization/images/reflective_stripes/IW21B.png"
                },
                {
                    text: 'Home Wash - 1" Silver S1',
                    value: "HW1S1",
                    imageSrc: "product_customization/images/reflective_stripes/HW1S1.png"
                },
                {
                    text: 'Home Wash - 2" Silver FR S2',
                    value: "HW2S2",
                    imageSrc: "product_customization/images/reflective_stripes/HW2S2.png"
                },
                {
                    text: 'Home Wash - 2" Ylw/Slver/Ylw FR Y3',
                    value: "HW2Y3",
                    imageSrc: "product_customization/images/reflective_stripes/HW2Y3.png"
                },
                {
                    text: 'Home Wash - 2" Yellow 1N',
                    value: "HW21N",
                    imageSrc: "product_customization/images/reflective_stripes/HW21N.png"
                },
                {
                    text: 'Home Wash - 1" Yellow Y1',
                    value: "HW1Y1",
                    imageSrc: "product_customization/images/reflective_stripes/HW1Y1.png"
                }
            ];
		$('#custom_stripes_style').ddslick({
			data: ddData,
			selectText: "Select your desired Style"
		});
		
		$("#custom_stripes_style li").unbind('click').click(function() {
			$(".ref_location").show();
			var dd_val = $("#custom_stripes_style .dd-selected-value").val();
			
			$(".custom_reflective_strp ul li:visible").each(function (){
				var strp_stl_up = $(this).attr("id");
				//alert(dd_val+"_"+strp_stl_up);
				$(".custom_reflective_strp ul li#"+ strp_stl_up +" img").remove();
				$(".custom_reflective_strp ul li#"+ strp_stl_up +" img").remove();
				$(".custom_reflective_strp ul li#"+ strp_stl_up).append("<img alt='' src='product_customization/product_customization/images/reflective_stripes/" + dd_val+"_"+strp_stl_up +".png'>");
			});
			
		});
		$(".custom_stripes_positon").change(function () {
		var strp = "";
		$(".custom_stripes_positon option:selected").each(function () {
		strp += $(this).val();
		});
		var dd_val = $("#custom_stripes_style .dd-selected-value").val();
		$(".selected_options").css("display","block");
		$(".custom_reflective_strp ul li#"+ strp +"_f").append("<img alt='' src='product_customization/product_customization/images/reflective_stripes/" + dd_val+"_"+strp +"_f.png'>");
		$(".custom_reflective_strp ul li#"+ strp +"_b").append("<img alt='' src='product_customization/product_customization/images/reflective_stripes/" + dd_val+"_"+strp +"_b.png'>");
		$(".custom_reflective_strp ul li#stripnone").css("display","none");
		if ( $(".custom_stripes_positon option:selected").val() == strp ) {
			var sel_opt = $(".custom_stripes_positon option:selected").text();
			var sel_opt_val = $(".custom_stripes_positon option:selected").val();
			$(".selected_options_list").append("<p id='sel_opt" + sel_opt_val + "'><span>" + sel_opt +"</span><small title='"+ sel_opt_val +"' name='" + sel_opt +"'>X</small></p>");
			$(".selected_options_list span#sel_opt" + sel_opt_val).html(sel_opt);
			$(".custom_stripes_positon option:selected").remove();
		}
		var current_price = $(".custom_price span").text();
		var stripes_price=parseInt(current_price) + 2;
		$(".custom_price span").html(stripes_price);
		$(".selected_options_list small").unbind('click').click(function() {
//			e.preventDefault();
			var ref = "";
			ref = $(this).attr("title");
			var sel_stripe = $(this).attr("name");
			$(".custom_reflective_strp ul li#"+ ref +"_f img").remove();
			$(".custom_reflective_strp ul li#"+ ref +"_b img").remove();
			$(this).parent().remove();
			$(".custom_stripes_positon optgroup").append("<option value='"+ ref +"'>"+ sel_stripe +"</option>");
			var current_price = $(".custom_price span").text();
			var updaterefprice = parseInt(current_price)-2;
			$(".custom_price span").html(updaterefprice);
			
			});
		});
		
		//.change();	
		
	// Logo 
	
	$(".custom_logo_positon").change(function () {
		var logo = "";
		$(".custom_logo_positon option:selected").each(function () {
		logo += $(this).val();
		$(".custom_product_logo_avail li").css("border","1px solid #fff");
		});
		if ( logo != "logonone" ){ 
			
			$(".custom_product_logo_avail").css("display","none");
			$(".logo_options").css("display","block");
			$(".registered_logos a").unbind('click').click(function(e) {
				$(".logo_options").css("display","none");
				$(".custom_product_registered_logos").css("display","block");
			});
			$(".generic_logos a").unbind('click').click(function(e) {
				$(".logo_options").css("display","none");
				$(".custom_product_logo_avail").css("display","none");
				$(".custom_product_countryflags_avail").css("display","block");
			});
			$(".state_flags a").unbind('click').click(function(e) {
				$(".logo_options").css("display","none");
				$(".custom_product_logo_avail").css("display","none");
				$(".custom_product_flags_avail").css("display","block");
			});
			$(".custom_product_logo_avail li").unbind('click').click(function(e) {
				e.preventDefault();
				$(".custom_product_logo_avail li").css("border","1px solid #fff");
				$(this).css("border","1px solid #ccc");
				var logoimg = $(this).attr("name");
				$(".logo_ok").attr("name",logoimg);
				
				
				$(".logo_ok").unbind('click').click(function(e) {
					if ( $(".custom_logo_positon option:selected").val() == logo ) {
						$(".selected_logo_options").css("display","block");
						var state_name = "";
						state_name = $(".custom_state_name").val();
						$(".custom_logo ul li#"+ logo).append("<img alt='' src='product_customization/images/logos/" + logoimg +"_small.png'>");
						$(".custom_logo ul li#"+ logo).append("<span class='state_nm'>" + state_name + "</span>");
						var sel_logo_opt = $(".custom_logo_positon option:selected").text();
						var sel_logo_opt_val = $(".custom_logo_positon option:selected").val();
						$(".custom_product_logo_avail").css("display","none");
						$(".selected_logo_options_list").append("<p id='sel_logo_opt" + sel_logo_opt_val + "'><span>" + sel_logo_opt +"</span><span class='logo_select'><img alt='' src='product_customization/images/logos/" + logoimg +"_small.png'></span><small title='"+ sel_logo_opt_val +"' name='" + sel_logo_opt +"'>X</small></p>");
						$(".selected_logo_options_list span#sel_logo_opt" + sel_logo_opt_val).html(sel_logo_opt);
						$(".custom_logo_positon option:selected").remove();
						$(".custom_embroid_positon option[value~='" + logo +"']").remove();
						/*$(".custom_logo ul li#"+ logo).css("display","block");
						$(".custom_logo ul li#stripnone").css("display","none");*/
						var current_price = $(".custom_price span").text();
						var stripes_price=parseInt(current_price) + 5;
						$(".custom_price span").html(stripes_price);
						$(".custom_state_name").val('');						
					}
					$(".selected_logo_options_list small").unbind('click').click(function() {
						//e.preventDefault();
						var loref = "";
						loref = $(this).attr("title");
						var sel_logo = $(this).attr("name");
							$(".custom_logo ul li#" + loref).html("");
							$(".custom_logo_positon optgroup").append("<option value='"+ loref +"'>"+ sel_logo +"</option>");
							$(".custom_embroid_positon optgroup").append("<option value='"+ loref +"'>"+ sel_logo +"</option>");
							var lcurrent_price = $(".custom_price span").text();
							var lupdaterefprice = parseInt(lcurrent_price)-5;
							$(".custom_price span").html(lupdaterefprice);
							$(this).parent().remove();
					});
					
				});
			});
		}
		});	
		
	// Size 
		
		$(".custom_size").change(function () {
		var siz = "";
		$(".custom_size option:selected").each(function () {
		siz += $(this).val();
		$(".custom_product_size_sel small").unbind('click').click(function(e) {
			e.preventDefault();
			var siz1 = "";
			siz1 = $(".custom_size option:selected").val();
			var size_current_price = $(".custom_price span").text();
			//alert(siz1);
			var updatesizeprice = parseInt(size_current_price)-parseInt(siz);
			$(".custom_price span").html(updatesizeprice);
			$(".custom_product_size").css("display","block");
			$(".custom_product_size_sel").css("display","none");
			});
		 var sizeprice = parseInt(siz) + 1;
		$(".custom_price span").html(sizeprice);
		var sel_size = $(".custom_size option:selected").text();
		$(".custom_product_size_sel span").html(sel_size);
		$(".custom_product_size").css("display","none");
		$(".custom_product_size_sel").css("display","block");
		
		});
		//alert(sizeprice);
		
		//$(".custom_reflective_strp ul li#"+ siz +"_f").css("display","block");
		});
		//.change();
		
		
	// Embroidered Text
	
	//Dropdown plugin data
			var ddData = [
				{
					text: 'BL Black',
					value: "50064-BL",
					imageSrc: "product_customization/images/embroidery/50064-BL.jpg"
				},
				{
					text: 'RL Royal Blue',
					value: "50088-RL",
					imageSrc: "product_customization/images/embroidery/50088-RL.jpg"
				},
				{
					text: 'WF Wildfire',
					value: "50562-WF",
					imageSrc: "product_customization/images/embroidery/50562-WF.jpg"
				},
				{
					text: '1A Bright Green',
					value: "50738-1A",
					imageSrc: "product_customization/images/embroidery/50738-1A.jpg"
				},
				{
					text: 'NU Nutmeg',
					value: "50635-NU",
					imageSrc: "product_customization/images/embroidery/50635-NU.jpg"
				},
				{
					text: 'WH White',
					value: "50081-WH",
					imageSrc: "product_customization/images/embroidery/50081-WH.jpg"
				}
			];
			$('#custom_embroid_color').ddslick({
				data: ddData,
				selectText: "Select your desired Color"
			});
			$(".custom_embroid_positon").change(function () {
				var embroid = "";
				$(".custom_embroid_positon option:selected").each(function () {
					embroid += $(this).val();
				});
				$(".custom_product_embroid_options").css("display","block");
				if ( embroid != "logonone" ){ 
					$(".custom_embroid_style").change(function () {
						var embroid_styl = "";
						$(".custom_embroid_style option:selected").each(function () {
							embroid_styl += $(this).val();
						});
						var embroid_styln = embroid_styl.charAt(0)+"_style";
						var embroid_siz =  "size_"+embroid_styl.charAt(1)+ embroid_styl.charAt(2);
						$("#custom_embroid_color li").unbind('click').click(function(e) {
						e.preventDefault();
						var embroid_color = "";
						embroid_color = $("#custom_embroid_color .dd-selected-value").val();
						$(".custom_embroid_text").focusout(function() {
						var embroid_text = "";
						embroid_text = $(".custom_embroid_text").val();
						$("#embroid_ok").unbind('click').click(function(e) {
							if(embroid !="" && embroid_color !="" && embroid_text !=""){
								if ( $(".custom_embroid_style option:selected").val() == embroid_styl ) {
									$(".custom_logo ul li#"+ embroid).append("<p class='" + embroid_styln + " col_" + embroid_color + " " + embroid_siz + "' title='" + embroid_styln + "_" + embroid_color + "_" + embroid_siz + "'>"+embroid_text+"</p>");
									var sel_embroid_opt = $(".custom_embroid_positon option:selected").text();
									var sel_embroid_opt_val = $(".custom_embroid_positon option:selected").val();
									$(".custom_product_embroid_options").css("display","none");
									$(".selected_embroid_options_list").append("<p id='sel_embroid_opt" + sel_embroid_opt_val + "'><span><b>Position :</b> " + sel_embroid_opt +"</span><span class='embroid_select_color'><b>Color :</b> "+ embroid_color +"</span><span class='embroid_select'><b>Text :</b> " + embroid_text +"</span><small title='"+ sel_embroid_opt_val +"' name='" + sel_embroid_opt +"'>X</small></p>");
									$(".selected_embroid_options_list span#sel_embroid_opt" + sel_embroid_opt_val).html(sel_embroid_opt);
									$(".custom_embroid_positon option:selected").remove();
									$(".custom_logo_positon option[value~='" + embroid +"']").remove();
									/*$(".custom_embroid ul li#"+ embroid).css("display","block");
									$(".custom_embroid ul li#logonone").css("display","none");*/
									var current_price = $(".custom_price span").text();
									var embroid_price=parseInt(current_price) + 10;
									$(".custom_price span").html(embroid_price);
									$(".selected_embroid_options").css("display","block");
									$(".custom_embroid_positon option:selected").removeAttr("selected");
									$(".custom_embroid_text").val('');
								}
								$(".selected_embroid_options_list small").unbind('click').click(function() {
									//e.preventDefault();
									var emref = "";
									emref = $(this).attr("title");
									var sel_embroid = $(this).attr("name");
										$(".custom_logo ul li#" + emref + " p").remove();
										$(".custom_embroid_positon optgroup").append("<option value='"+ emref +"'>"+ sel_embroid +"</option>");
										$(".custom_logo_positon optgroup").append("<option value='"+ emref +"'>"+ sel_embroid +"</option>");
										var ecurrent_price = $(".custom_price span").text();
										var eupdaterefprice = parseInt(ecurrent_price)-10;
										$(".custom_price span").html(eupdaterefprice);
										$(this).parent().remove();
								});
							}
						});
					});
				});
				});
				}
			});
