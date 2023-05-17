<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Dompdf\Dompdf;
use Illuminate\Http\Response;
use App\Models\Maintenancerequest;
use App\Models\PersonalData;

$url = 'http://localhost/api/maintenance_show/{id}';
$response = file_get_contents($url);
$data = json_decode($response, true);
require_once 'dompdf/autoload.inc.php';
$id = $_GET['id'];
$nombre = null;
$apellido = null;


class MaintenanceRequestPDF extends Controller
{
    public function maintenanceRequestPDF()
    {

        $dompdf=new Dompdf();

        $data = [];
    
        $html = '
        <html>
        <head>
            <style>
                table {
                    width: 100%;
                }
                td {
                    border: 1px solid black;
                }
                .center {
                    text-align: center;
                }
                .table-container {
                    float: right;
                    margin-left: 20px;
                 }

                .table-container2 {
                    float: center;
                    margin-left: 20px;
                }
                .box {
                    float: left;
                    margin: auto;
                    width: 525;
                    height: auto;
                    padding: 10px;
                    border: 3px solid crimson;
                }
      
                table {
                    border-collapse: collapse;
                }
      
                table, th, td {
                    border: 1px solid black;
                }
      
                th {
                }
      
                td {
                    padding: 5px;
                }
      
                .small-column {
                    width: 20px;
                }
            </style>
        </head>
        <body>
            <table >
                <tr>
                    <td rowspan="3" style="width=200 height=200">text1</td>
                    <td rowspan="2">Nombre del Documento: Formato para  Solicitud de Mantenimiento Correctivo</td>
                    <td >Código: ITA- AD-PO-001-02</td>
                </tr>
                <tr>
                    <td>celda1</td>
                </tr>
                <tr>
                    <td>celda2</td>
                </tr>
            </table>
            <div class="center">
                <h1 style="font-family: arial; font-size: 14px;">Solicitud de mantenimiento</h1>
            </div>
            <div class="table-container">
            <table>
                <tr>
                    <th style="font-family: arial; font-size: 10px;">
                        Recursos Materiales y Servicios
                    </th>
                        <th class="small-column">
                    </th>
                </tr>
                <tr>
                    <th style="font-family: arial; font-size: 10px;">Mantenimiento de Equipo</th>
                    <th class="small-column"></th>
                </tr>
                <tr>
                    <th style="font-family: arial; font-size: 10px;">Centro de Cómputo</th>
                    <th class="small-column"></th>
                </tr>
            </table>
            </div>
            <div style="clear: both;"></div>
            <p style="float: right;">Folio:'.$id.'________</p>
            <br>
            <br>
            <br>
            <div class="box" style=" border: 1px solid black">
                <h2 style="font-family: arial; font-size: 12px;">Área y firma del solicitante:</h2>
            </div>
            <div style="clear: both;"></div>
            <br>
            <br>
            <div class="box" style=" border: 1px solid black">
                <h2 style="font-family: arial; font-size: 12px;">Nombre y Firma del Solicitante:'.$name.'</h2>
                
            </div>
            <div style="clear: both;"></div>
            <div class="box" style=" border: 1px solid black">
                <h2 style="font-family: arial; font-size: 12px;">Fecha de Elaboración</h2>
            </div>
            <div style="clear: both;"></div>
            <div class="box" style=" border: 1px solid black">
                <h2 style="font-family: arial; font-size: 12px;">Descripción del servicio solicitado o falla a reparar:</h2>
            </div>
            <div style="clear: both;"></div>
        </body>
        </html>';
        // Reemplaza con tu contenido HTML personalizado
    
        $pdf = new Dompdf();
        $pdf->loadHtml($html);
        $pdf->render();
    
        $filename = 'maintenance request.pdf';
        $filePath = storage_path('app/public/' . $filename);
        file_put_contents($filePath, $pdf->output());
    
        return response()->file($filePath, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="'.$filename.'"'
        ]);
    }

    public function downloadPDF($filename)
    {
        $filePath = storage_path('app/public/' . $filename);
    
        return response()->download($filePath);
    }

    public function showRelease()
    {
        $maintenance = Maintenancerequest::join('workorders', 'workorders.id', '=', 'maintenancerequest_id')
        ->where('workorders.released', 'true')
        ->get([
            'workorders.id', 
            'workorders.maintenanceType', 
            'workorders.serviceType', 
            'workorders.employeeName', 
            'workorders.maintenanceDate', 
            'workorders.jobDescription', 
            'maintenancerequests.evidence1', 
            'maintenancerequests.evidence2', 
            'maintenancerequests.evidence3',
            'maintenancerequests.status'
        ]);
        return $maintenance;
    }

    public function showEarring()
    {
        $maintenance = Maintenancerequest::join(
            'personaldatas', 'personaldatas.id', '=', 'maintenancerequests.personaldata_id'
            )
        ->where('maintenancerequests.status', 'Pendiente')
        ->get([
            'maintenancerequests.id', 
            'maintenancerequests.requestDate', 
            'personaldatas.area',
            'personaldatas.name', 
            'maintenancerequests.requestDescription', 
            'maintenancerequests.evidence1', 
            'maintenancerequests.evidence2', 
            'maintenancerequests.evidence3', 
            'maintenancerequests.status'
    ]);
        return $maintenance;
    }

    public function showActiveRequest()
    {
        $maintenance = Maintenancerequest::join(
            'personaldatas', 'personaldatas.id', '=', 'maintenancerequests.personaldata_id'
            )
        ->where('maintenancerequests.status', 'Pendiente')
        ->get([
            'maintenancerequests.id', 
            'maintenancerequests.requestDate', 
            'personaldatas.name', 
            'maintenancerequests.department', 
            'maintenancerequests.requestDescription', 
            'maintenancerequests.evidence1', 
            'maintenancerequests.evidence2', 
            'maintenancerequests.evidence3', 
            'personaldatas.signature',
            'maintenancerequests.status'
            ]);
        return $maintenance;
    }
}
