import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/services/users.service';

export interface user {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  support: Support;
}

interface Datum {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Support {
  url: string;
  text: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  users!: user;
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name','avatar'];
  dataSource = new MatTableDataSource<any>();
  clickedRows = new Set<user>();

  constructor(private userSrv : UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers(){
    this.userSrv.getUsers().subscribe(users =>{
      this.users = users as user;
      this.dataSource.data = this.users.data;
    })
  }
}
