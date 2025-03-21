class FileManager {
    public _dataLocalStorage: string | null;
  
    constructor() {
      this._dataLocalStorage = '';
    }
  
    public saveThefile(): void {
      this._dataLocalStorage = localStorage.getItem('itemOptionList');
  
      if (this._dataLocalStorage) {
        const data = JSON.parse(this._dataLocalStorage);
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' }); 
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = 'data.json';
        a.style.display = 'none';
  
        document.body.appendChild(a);
        a.click(); 
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }
  

    public loadTheFile(file: File): void {
      const reader = new FileReader();
      
      reader.onload = ():void => {
        try {
          if (typeof reader.result === 'string') {
            const data = JSON.parse(reader.result); 
            this._dataLocalStorage = JSON.stringify(data);
            localStorage.setItem('itemOptionList', this._dataLocalStorage);
          } else {
            console.error('Invalid file format');
          }
        } catch (error) {
          console.error('Error parsing file:', error);
        }
      };
  
      reader.readAsText(file);
    }
  }
  
  export default FileManager;