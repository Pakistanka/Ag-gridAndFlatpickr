function getDatePicker() {

  class Datepicker {
    constructor() {}

    init(params) {
      // create the cell
      this.eInput = document.createElement('input');
      this.eInput.value = params.value;
      
      $(this.eInput).flatpickr({
        dateFormat: 'd.m.Y',
        minDate: "today",
        enableTime: true,
      });
    }
    // gets called once when grid ready to insert the element
    getGui() {
      return this.eInput;
    }
  // focus and select can be done after the gui is attached
    afterGuiAttached(){
      this.eInput.focus();
      this.eInput.select();
    }

    // returns the new value after editing
    getValue() {
      return this.eInput.value;
    }

    // if true, then this editor will appear in a popup
    isPopup = () => false;
  }

  return Datepicker;
}

  const columnDefs = [
  {headerName: 'Athlete', field: 'athlete'},
  {headerName: 'Country', field: 'country'},
  {headerName: 'Sport', field: 'sport'},
  {headerName: 'Date', field: 'date', editable: true, cellEditor: 'datePicker'},
];

  // specify the data
  const rowData = [
    {athlete: "Evgenya Medvedeva", country: "Russia", sport: "Skating", date: "05.06.2019"},
    {athlete: "Alina Zagitova", country: "Russia", sport: "Skating", date: "05.06.2019"},
    {athlete: "Alena Kostornaya", country: "Russia", sport: "Skating", date: "05.06.2019"},
    {athlete: "Aleksandra Trusova", country: "Russia", sport: "Skating", date: "05.06.2019"},
  ];

  const gridOptions = {
    components:{
      datePicker: getDatePicker()
    },
    columnDefs,
    rowData,
  };

  document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    window.gridOptions;
  });



