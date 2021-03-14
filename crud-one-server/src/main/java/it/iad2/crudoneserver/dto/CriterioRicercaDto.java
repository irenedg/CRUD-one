package it.iad2.crudoneserver.dto;

public class CriterioRicercaDto {

    private String criterio;

    public CriterioRicercaDto() {
    }

    public CriterioRicercaDto(String criterio) {
        this.criterio = criterio;
    }

    public String getStringa() {
        return criterio;
    }

    public void setStringa(String criterio) {
        this.criterio = criterio;
    }

    @Override
    public String toString() {
        return "CriterioRicercaDto{" + "criterio=" + criterio + '}';
    }

}
