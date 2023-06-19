var drop = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < drop.length; i++) 
{
	drop[i].addEventListener("click", function() 
	{
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") 
		{
 			panel.style.display = "none";
		} 
		else 
		{
			panel.style.display = "block";
		} 
	});
}