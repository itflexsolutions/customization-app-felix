function prod_customize() {
/*	$(".add_reflective_stripes .pogType_select select option[value~='09']").attr({"selected":"selected"});
	$(".add_reflective_stripes .zform_select option[value~='00']").attr({"selected":"selected"});
	$(".add_Logo .pogType_select select option[value~='02']").attr({"selected":"selected"});
	$(".add_Logo .pogType_imggrid input.img_A1_01").attr('checked', 'checked');
	
	$(".add_embroidery .selcls_AB select option[value~='02']").attr({"selected":"selected"});
	$(".add_embroidery .pogType_imgselect select option[value~='02']").attr({"selected":"selected"});
	
	
	$(".add_embroidery .pogType_select select option[value~='05']").attr({"selected":"selected"});*/
// Front and Back
		$("#custom_back").unbind('click').click(function(e) {
			  e.preventDefault();
			  var title1 = $(this).attr("name");
			  imgmain.src=mnimg;
			  $(".front_stripe").css("display","none");		
			  $(".back_stripe").css("display","block");	
			   $(".front_logo").css("display","none");		
			  $(".back_logo").css("display","block");	
		});
        $("#custom_front").unbind('click').click(function(e) {
			  e.preventDefault();
			  var title1 = $(this).attr("name");
			  imgmain.src=mnimg;
			  $(".back_stripe").css("display","none");
			  $(".front_stripe").css("display","block");
			  $(".back_logo").css("display","none");		
			  $(".front_logo").css("display","block");	
		});
		
	// Color and Image
		$(".custom_other_images ul li img").unbind('click').click(function(e) {
			  e.preventDefault();
			  var title = $(this).attr("name");
			  
			  var mnimg_o = $(this).attr("src");
			  var mnimg = mnimg_o.replace("W70-H75-", "");
			  if($(".back_stripe").css('display') == "block"){
			  	imgmain.src= mnimg;
			  }else{
			    imgmain.src= mnimg;
			  }			  
			  if($(".back_logo").css('display') == "block"){
			  	imgmain.src= mnimg;
			  }else{
			    imgmain.src= mnimg;
			  }			  
			  $("#custom_back").attr('name',title+'_b');
			  $("#custom_front").attr('name',title);
		});
		$( ".pogType_select select" ).each(function() {
			var sel_cls = $(this).attr('name');
			$(this).parent().parent().addClass( "selcls_"+sel_cls );
			});
		
	// Reflective Stripes
	
		$(".add_reflective_stripes .imageselect_image img").attr("title");
		$(".add_reflective_stripes .zform_select").change(function () {
			var dd_val = "";
			$(".add_reflective_stripes .pogType_select").show();
			$(".add_reflective_stripes .zform_select option:selected").each(function () {
				var strp = $(".add_reflective_stripes .imageselect_image img").attr("title");
				dd_val += $(this).attr("id");
				var sel_sty = $(this).text();
				$(".add_reflective_stripes .sel_option_sty span").html(sel_sty);
				$(".sel_opt_all .refs_option .sel_refs_sty span").html(sel_sty);
				$(".custom_reflective_strp ul li:visible").each(function (){
					var strp_stl_up = $(this).attr("id");
				var str_possa = strp_stl_up.replace("ref", "");
					$(".custom_reflective_strp ul li#"+ strp_stl_up +" img").remove();
					$(".custom_reflective_strp ul li#"+ strp_stl_up).append("<img alt='' src='"+strp + "reflective_stripes/" + dd_val+"_"+str_possa +".png'>");
				});
			});
			$(".add_reflective_stripes .zform_select").css("padding-left","40px");
		});
			
		$(".add_reflective_stripes .pogType_select select").change(function () {
		var strp = "";
		$(".add_reflective_stripes .pogType_select select option:selected").each(function () {
		strp += $(this).val();
		ref_price = $(this).attr("title");
		});
		var str_pos = $(".add_reflective_stripes .pogType_select select option:selected").val();
		var str_pos_txt = $(".add_reflective_stripes .pogType_select select option:selected").text();
		var dd_val = $(".add_reflective_stripes .zform_select option:selected").attr("id");
		$(".selected_options").css("display","block");
		$(".custom_reflective_strp ul li#ref"+ strp +"_f").append("<img alt='' src='product_customization/images/reflective_stripes/" + dd_val+"_"+strp +"_f.png'>");
		$(".custom_reflective_strp ul li#ref"+ strp +"_b").append("<img alt='' src='product_customization/images/reflective_stripes/" + dd_val+"_"+strp +"_b.png'>");
		if ( $(".add_reflective_stripes .pogType_select select option:selected").val() == str_pos ) {
			var sel_opt = $(".add_reflective_stripes .zform_select option:selected").text();
			var sel_opt_val = $(".add_reflective_stripes .zform_select option:selected").val();
			$(".selected_options_list").append("<p id='sel_opt" + sel_opt_val + "'><span>" + str_pos_txt +"</span><small title='"+ str_pos +"' name='" + str_pos_txt +"'>X</small></p>");
			$(".sel_opt_all .sel_refs_option").append("<p class='sel_ref_pos_" + str_pos + "'><span>" + str_pos_txt +"</span></p>");
			$(".selected_options_list span#sel_opt" + sel_opt_val).html(sel_opt);
			$(".add_reflective_stripes .pogType_select select option:selected").remove();
			$(".refs_option_wrap").css('display','block');
		}
		var current_price = $(".custom_price span").text();
		var stripes_price=parseFloat(current_price) + parseFloat(ref_price);
		$(".custom_price span").html(stripes_price);
		$(".selected_options_list small").unbind('click').click(function() {
//			e.preventDefault();
			var ref = "";
			ref = $(this).attr("title");
			var sel_stripe = $(this).attr("name");
			$(".custom_reflective_strp ul li#ref"+ ref +"_f img").remove();
			$(".custom_reflective_strp ul li#ref"+ ref +"_b img").remove();
			$(this).parent().remove();
			$(".sel_opt_all .sel_refs_option .sel_ref_pos_"+ref).remove();
			$(".add_reflective_stripes .pogType_select select").append("<option value='"+ ref +"'>"+ sel_stripe +"</option>");
			var current_price = $(".custom_price span").text();
			var updaterefprice = parseFloat(current_price) - parseFloat(ref_price);
			$(".custom_price span").html(updaterefprice);
			
			});
		});
		
		//.change();	
		
	// Logo 
	
	$(".add_Logo .pogType_select select").change(function () {
		var logo = "";
		var logo_pos = "";
		$(".add_Logo .pogType_select select option:selected").each(function () {
		logo += $(this).val();
		logo_pos += $(this).text();
		$(".add_Logo .pogType_imggrid img").css("border","1px solid #fff");
		});
		if ( logo != "" ){ 
			$(".add_Logo .pogType_imggrid").show();
			$(".add_Logo .logo_buts").show();
			$(".add_Logo .pogType_imggrid img").unbind('click').click(function(e) {
				$(".add_Logo .pogType_cb").show();
				var img_ti = $(this).attr("title");
				$(".add_Logo .pogType_imggrid input.img_"+img_ti).attr('checked', 'checked');
				$(".add_Logo .pogType_imggrid img").css("border","1px solid #fff");
				$(this).css("border","1px solid #ccc");
				var log_price = $(this).attr("name");
				$(".add_Logo .pogType_cb input").unbind('click').click(function(e) {
					$(".add_Logo .pogType_text").show();	
					$(".add_Logo .pogType_text input").attr({"maxlength":"10"});
				});
				var logoimg = $(this).attr("src");
				var logoimga = logoimg.replace("W87-H58-BFFFFFF", "");
				$(".logo_ok").attr("name",logoimga);
				$(".logo_ok").unbind('click').click(function(e) {
					if ( $(".add_Logo .pogType_select select option:selected").val() == logo ) {
						$(".selected_logo_options").css("display","block");
						var logo_text = "";
						logo_text = $(".add_Logo .pogType_text input").val();
						$(".state_nm").show();
						$(".custom_logo ul li#log_"+ logo).append("<img alt='' src='" + logoimga +"'>").append("<span class='state_nm'>" + logo_text + "</span>");;
						$(".add_Logo .pogType_imggrid").css("display","none");
						$(".selected_logo_options_list").append("<p id='logo_pos" + logo + "'><label>Position</label><span>" + logo_pos +"</span><span class='logo_select'><img alt='' src='" + logoimg +"'></span><br><label>Text</label><span class='log_text'>" + logo_text + "</span><small title='"+ logo +"' name='" + logo_pos +"'>X</small></p>");
						
						$(".sel_opt_all .sel_log_option").append("<p class='logo_pos" + logo + "'><label>Position</label><span>" + logo_pos +"</span><span class='logo_select'><img alt='' src='" + logoimg +"'></span><br><label>Text</label><span class='log_text'>" + logo_text + "</span></p>");
						
						$(".add_Logo .pogType_select select option:selected").remove();
						$(".add_embroidery .selcls_AA select option[value~='" + logo + "']").remove();
						var current_price = $(".custom_price span").text();
						var stripes_price=parseFloat(current_price) + parseFloat(log_price);
						$(".custom_price span").html(stripes_price);
						$(".add_Logo .pogType_text input").val('');			
						$(".add_Logo .pogType_imggrid").hide();
						$(".add_Logo .pogType_cb").hide();
						$(".add_Logo .logo_buts").hide();
						$(".add_Logo .pogType_text").hide();
						$(".add_Logo .pogType_cb input").removeAttr("checked");
						$(".log_option_wrap").css('display','block');
					}
					$(".selected_logo_options_list small").unbind('click').click(function() {
						//e.preventDefault();
						var loref = "";
						loref = $(this).attr("title");
						var sel_logo = $(this).attr("name");
							$(".custom_logo ul li#log_"+ logo).html("");
							$(".add_Logo .pogType_select select").append("<option value='"+ loref +"'>"+ sel_logo +"</option>");
							$(".add_embroidery .selcls_AA select").append("<option value='"+ loref +"'>"+ sel_logo +"</option>");
							var lcurrent_price = $(".custom_price span").text();
							var lupdaterefprice = parseFloat(lcurrent_price)-parseFloat(log_price);
							$(".custom_price span").html(lupdaterefprice);
							$(this).parent().remove();
					});
					
				});
			});
		}
		});	
		
		
	// Embroidered Text
	
			$(".add_embroidery .selcls_AA select").change(function () {
				var embroid = "";
				$(".add_embroidery .selcls_AA select option:selected").each(function () {
					embroid += $(this).val();
				});
				if ( embroid != "" ){ 
					$(".add_embroidery .selcls_AB").show();
					$(".add_embroidery .selcls_AB").change(function () {
						var embroid_styl = "";
						$(".add_embroidery .selcls_AB select option:selected").each(function () {
							embroid_styl += $(this).val();
							var embroid_styl_text = $(this).text();
							$(".add_embroidery .pogType_text input").val('');
							var embroid_styl_texta = embroid_styl_text.split('(')[1];
							var embroid_styl_textb = embroid_styl_texta.replace("Characters)", "").replace(" ", "");
							$(".add_embroidery .pogType_text input").attr({"maxlength":embroid_styl_textb});
							
						});
						$(".add_embroidery .pogType_imgselect").show();
						var embroid_styln = "em_" + embroid_styl + "_style";
						$(".add_embroidery .pogType_imgselect select").change(function () {
							var embroid_color = "";
						$(".add_embroidery .pogType_imgselect select option:selected").each(function () {
							embroid_color += $(this).val();
							
							
						});
						$(".add_embroidery .pogType_text").show();
						$(".add_embroidery .embroid_but").show()
						
						$(".add_embroidery .pogType_imgselect select").css("padding-left","80px");
						
						var embroid_colorn = "em_" + embroid_color + "_color";
						$(".add_embroidery .pogType_text input").focusout(function() {
						var embroid_text = "";
						embroid_text = $(".add_embroidery .pogType_text input").val();
						
						$("#embroid_ok").unbind('click').click(function(e) {
							if(embroid !="" && embroid_color !="" && embroid_text !=""){
								if ( $(".add_embroidery .selcls_AB select option:selected").val() == embroid_styl ) {
									
									var embroid_price = $(".add_embroidery .pogType_imgselect select option:selected").attr("name");
									$(".custom_logo ul li#log_"+ embroid).append("<p class='" + embroid_styln + " " + embroid_colorn + "' title='" + embroid_styln + "_" + embroid_color + "'>"+embroid_text+"</p>");
									var sel_embroid_opt = $(".add_embroidery .selcls_AA select option:selected").text();
									var sel_embroid_opt_val = $(".add_embroidery .selcls_AA select option:selected").val();
									var embroid_color_txt = $(".add_embroidery .pogType_imgselect select option:selected").text();
									$(".selected_embroid_options_list").append("<p id='sel_embroid_opt" + sel_embroid_opt_val + "'><span><b>Position :</b> " + sel_embroid_opt +"</span><span class='embroid_select_color'><b>Color :</b> "+ embroid_color_txt +"</span><span class='embroid_select'><b>Text :</b> " + embroid_text +"</span><small title='"+ sel_embroid_opt_val +"' name='" + sel_embroid_opt +"'>X</small></p>");
									
									$(".emb_option .sel_emb_option").append("<p class='sel_opt" + sel_embroid_opt_val + "'><span><b>Position :</b> " + sel_embroid_opt +"</span><span class='embroid_select_color'><b>Color :</b> "+ embroid_color_txt +"</span><span class='embroid_select'><b>Text :</b> " + embroid_text +"</span></p>");
									
									$(".selected_embroid_options_list span#sel_embroid_opt" + sel_embroid_opt_val).html(sel_embroid_opt);
									$(".add_embroidery .selcls_AA select option:selected").remove();
									$(".add_Logo .selcls_AA select option[value~='" + embroid +"']").remove();
									$(".add_embroidery .selected_embroid_options").show();
									$(".add_embroidery .pogType_text input").val('');
									$(".add_embroidery .pogType_imgselect").hide();
									$(".add_embroidery .selcls_AB").hide();
									$(".add_embroidery .embroid_but").hide();
									$(".add_embroidery .pogType_text").hide();
									var current_price = $(".custom_price span").text();
									var embroid_price=parseFloat(current_price) + parseFloat(embroid_price);
									$(".custom_price span").html(embroid_price);
									$(".add_embroidery .selcls_AA select option").removeAttr("selected");
								}
								$(".selected_embroid_options_list small").unbind('click').click(function() {
									//e.preventDefault();
									var emref = "";
									emref = $(this).attr("title");
									var sel_embroid = $(this).attr("name");
										$(".custom_logo ul li#log_" + emref + " p").remove();
										$(".emb_option .sel_emb_option p.sel_opt"+emref).remove();
										$(".add_embroidery .selcls_AA select").append("<option value='"+ emref +"'>"+ sel_embroid +"</option>");
										$(".add_Logo .selcls_AA select").append("<option value='"+ emref +"'>"+ sel_embroid +"</option>");
										var ecurrent_price = $(".custom_price span").text();
										var eupdaterefprice = parseFloat(ecurrent_price)-parseFloat(embroid_price);
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
			$(".opt_apply").unbind('click').click(function() {
				var em_up = $(".sel_opt_all").html();
				$(".add_embroidery .pogType_textarea textarea").val(em_up);																	 
			 });
			
}