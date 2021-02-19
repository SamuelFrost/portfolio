// TODO: make links server agnostic
setTimeout(() => {
    sessionStorage.setItem("redirect_pathname", window.location.pathname);
    window.location.pathname = "/portfolio";
  }, 0)