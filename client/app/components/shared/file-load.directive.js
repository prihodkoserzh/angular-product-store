export default () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, el, attrs, ctrl) => {
      el.on("change", changeEvent => {
        const reader = new FileReader();
        reader.onload = function (loadEvent) {
            const newValue = {
              lastModified: changeEvent.target.files[0].lastModified,
              lastModifiedDate: changeEvent.target.files[0].lastModifiedDate,
              name: changeEvent.target.files[0].name,
              size: changeEvent.target.files[0].size,
              type: changeEvent.target.files[0].type,
              data: loadEvent.target.result
            };
            ctrl.$setViewValue(newValue);
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    },
  };
};