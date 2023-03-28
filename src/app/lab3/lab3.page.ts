import { Component, OnInit } from '@angular/core';

interface Sale {
  date: string;
  sold_items: number;
  total_sales: number;
  credit_sales: number;
}

interface TotalSales {
  date: string;
  total_sales: number;
}

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page implements OnInit {
  sales: Sale[] = [];
  totalSales: any = { sold_items: 0, total_sales: 0, credit_sales: 0 };
  salesByDay: TotalSales[] = [];
  url: string = 'https://api.jsonbin.io/v3/b/6415feceace6f33a22f12bc1'

  constructor() { }

  async ngOnInit() {
    await this.getSalesData();
    this.salesByDay = this.sumSalesByDay(this.sales);
    console.log(this.salesByDay);
  }

  async getSalesData(): Promise<void> {
    const response = await fetch(this.url);
    const jsonData = await response.json();
    this.sales = jsonData.record.data as Sale[];
  }

  sumSalesByDay(sales: Sale[]): TotalSales[] {
    const salesByDay: TotalSales[] = sales.reduce<TotalSales[]>((totalSales, sale) => {
      const date = sale.date;
      const existingSale: TotalSales | undefined = totalSales.find(s => s.date === date);
      if (existingSale) {
        existingSale.total_sales += sale.total_sales + sale.credit_sales;
      } else {
        totalSales.push({
          date: sale.date,
          total_sales: sale.total_sales + sale.credit_sales
        });
      }
      return totalSales;
    }, []);
    return salesByDay;
  }
}