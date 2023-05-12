function initMap() {
	const geocoder = new google.maps.Geocoder();

	document.getElementById("validate").addEventListener("click", function () {
		const address = document.getElementById("address").value;
		const zip = document.getElementById("zip").value;
		const city = document.getElementById("city").value;
		const state = document.getElementById("state").value;

		const fullAddress = `${address}, ${city}, ${state} ${zip}`;

		geocoder.geocode({ address: fullAddress }, function (results, status) {
			if (status === "OK") {
				// Address is valid
				alert("Address is valid");
			} else {
				// Address is invalid
				alert("Address is invalid");
			}
		});
	});
}
