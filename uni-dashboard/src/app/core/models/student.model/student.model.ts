export interface Student {
  id:       number;
  name:     string;
  email:    string;
  major:    string;
  year:     1 | 2 | 3 | 4;
  gpa:      number;       
  status:   'Active' | 'Inactive' | 'Graduated';
  enrolled: string[];      
}