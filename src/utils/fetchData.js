const {REACT_APP_DEFAULT_PUBLISH_HOST, REACT_APP_DEFAULT_ENDPOINT} = process.env;

export const fetchData = async (path) => {
	const url = `${getAuthorHost()}/${path.split(":/")[1]}.model.json`;
	const data = await fetch(url, {credentials: "include"});
	const json = await data.json();
	return json;
};
export const getAuthorHost = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("authorHost") && isValidAEMHost(searchParams.get("authorHost"))) {
		return searchParams.get("authorHost");
	} else {
		// Fall back to publish host when no authorHost query param is present
		return getPublishHost();
	}
}

export const getPublishHost = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("publishHost") && isValidAEMHost(searchParams.get("publishHost"))) {
		return searchParams.get("publishHost");
	} else {
		return REACT_APP_DEFAULT_PUBLISH_HOST;
	}
}

export const getEndpoint = () => {
	const url = new URL(window.location.href);
	const searchParams = new URLSearchParams(url.search);
	if (searchParams.has("endpoint")) {
		return searchParams.get("endpoint");
	} else {
		return REACT_APP_DEFAULT_ENDPOINT;
	}
}

function isValidAEMHost(host) {
	const regex = /https:\/\/(author|publish)-p(\d+)-e(\d+)\.adobeaemcloud\.com/;
	return regex.test(host);
}
