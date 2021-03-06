import React, { useEffect, useState } from 'react'
import { Dropdown, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { NavLink } from 'react-router-dom'

export default function JobAdvertisementOrderDateDesc() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisementOrderByDateDesc().then(result => setJobAdvertisements(result.data.data))
  },[])



    return (
        <div>
            <Table celled structured>
        <Table.Header>
        <Dropdown placeholder="Sırala" additionPosition="top" >
          <Dropdown.Menu>
          <Dropdown.Item text="Aktifliğe göre sırala"  as={NavLink} to="/jobadvertisements"/>
          </Dropdown.Menu>
        </Dropdown>
          <Table.Row>
            <Table.HeaderCell rowSpan='2'>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>İş Türü</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Gerekli Personel Sayısı</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'> Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map(jobAdvertisements => (
            <Table.Row key={jobAdvertisements.id}>
              <Table.Cell>{jobAdvertisements.employer.companyName}</Table.Cell>
              <Table.Cell> {jobAdvertisements.jobTitle.jobName}</Table.Cell>
              <Table.Cell>{jobAdvertisements.numberOfOpenPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisements.publicationDate}</Table.Cell>
              <Table.Cell>{jobAdvertisements.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
        
    )
}
